import { db } from "@/app/lib/firebase";
import resend from "@/app/lib/resend";
import "server-only"

import Stripe from "stripe";

export async function handleStripePayment(
    event: Stripe.CheckoutSessionCompletedEvent
) {
    if (event.data.object.payment_status === "paid") {
        console.log("Payment successful! Send a Email to the user to liberate the access.");
        const metadata = event.data.object.metadata;
        const userId = metadata?.userId;
        const userEmail = event.data.object.customer_email
        
        if (!userId || !userEmail) {
            console.error("User ID or User Email not found in metadata");
            return;
        }
        
        await db.collection("users").doc(userId).update({
            stripeSubscriptionId: event.data.object.subscription,
            subscriptionStatus: "active",
        });

        const { data, error } = await resend.emails.send({
            from: 'Acme <your@email.com>',
            to: [userEmail],
            subject: 'Hello world',
            text: "Payment Ok"
        });
    }
}