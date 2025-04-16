import { NextRequest, NextResponse } from "next/server";
import { Preference } from "mercadopago"
import mpClient from "@/app/lib/mercado-pago";

export async function POST(req: NextRequest) {
    const { testId, userEmail } = await req.json();

    try {
        const preference = new Preference(mpClient)

        const createPreference = await preference.create({
            body: {
                external_reference: testId, // User ID
                metadata: {
                    testId, // var will be turned into a snake_case key in webhook -> test_id
                    userEmail,
                },
                ...(userEmail && { payer: { email: userEmail } }),
                items: [
                    {
                        id: "",
                        description: "",
                        title: "",
                        quantity: 1,
                        unit_price: 1,
                        currency_id: "BRL",
                        category_id: "services",
                    }
                ],
                payment_methods: {
                    installments: 12,
                    excluded_payment_methods: [
                        {
                            id: "bolbradesco",
                        },
                        {
                            id: "pec",
                        }
                    ],
                    excluded_payment_types: [
                        {
                            id: "ticket",
                        }
                    ],
                },
               back_urls: {
                    success: `${req.headers.get("origin")}/api/mercado-pago/pending`,
                    failure: `${req.headers.get("origin")}/api/mercado-pago/pending`,
                    pending: `${req.headers.get("origin")}/api/mercado-pago/pending`,
               } 
            }
        });

        if (!createPreference.id) {
            return NextResponse.json({ error: "Failed to create preference" }, { status: 500 });
        }

        return NextResponse.json({
            id: createPreference.id,
            initPoint: createPreference.init_point,
        });

    } catch (error) {
        console.error("Error creating preference:", error);
        return NextResponse.json({
            error: "Failed to create checkout with Mercado Pago" },
            { status: 500 }
        );
    }
}