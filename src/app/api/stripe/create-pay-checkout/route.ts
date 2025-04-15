import stripe from "@/app/lib/stripe";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const { testId } = await req.json();

    const price = process.env.STRIPE_PRODUCT_PRICE_ID;

    if (!price) {
        return NextResponse.json({ error: 'Price not found'}, { status: 500 });
    }

    try {
        const session = await stripe.checkout.sessions.create({
            customer: testId,
            mode: "payment",
            line_items: [{ price, quantity: 1 }],
            success_url: `${process.env.NEXT_PUBLIC_URL}/success`,
            cancel_url: `${process.env.NEXT_PUBLIC_URL}/cancel`,
        });
    } catch (error) {
        console.error("Error creating checkout session:", error);
        return NextResponse.json({ error: 'Error creating checkout session' }, { status: 500 });
    }
}