import stripe from "@/app/lib/stripe";
import { handleStripeCancelSubscription } from "@/app/server/stripe/handle-cancel";
import { handleStripePayment } from "@/app/server/stripe/handle-payment";
import { handleStripeSubscription } from "@/app/server/stripe/handle-subscription";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";


const secret = process.env.STRIPE_WEBHOOK_SECRET;

export async function POST(req: NextRequest) {

    try {
        const body = await req.text();
        const headersList = await headers();
        const signature = headersList.get("stripe-signature");

        if (!signature || !secret) {
            return NextResponse.json(
                { error: "Missing Stripe signature" },
                { status: 400 }
            );
        }

        const event = stripe.webhooks.constructEvent(body, signature, secret);
        switch (event.type) {
            case "checkout.session.completed": // Payment successful
                const metadata = event.data.object.metadata;

                if(metadata?.price === process.env.STRIPE_PRODUCT_PRICE_ID) {
                    await handleStripePayment(event);
                }
                if (metadata?.price === process.env.STRIPE_SUBSCRIPTION_PRICE_ID) {
                    await handleStripeSubscription(event);
                }
                break;
            case "checkout.session.expired":
                console.log("Enviar email de aviso de expiração");
                break;
            case "checkout.session.async_payment_succeeded": // Billing successful
                console.log("Enviar email de aviso de pagamento realizado");
                break;
            case "checkout.session.async_payment_failed": // Billing failed
                console.log("Enviar email de aviso de pagamento falhado");
                break;
            case "customer.subscription.created":
                console.log("Enviar email de boas-vindas");
                break;
            case "customer.subscription.updated":
                console.log("Enviar email de aviso de atualização de assinatura");
                break;
            case "customer.subscription.deleted": // Subscription canceled
                await handleStripeCancelSubscription(event);
                break; 
            default:
                console.log(`Unhandled event type ${event.type}`);
                break;
        }

        return NextResponse.json({ message: "Webhook received" }, { status: 200 });
    } catch (error) {
            console.error("Error processing webhook:", error);
            return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }

}