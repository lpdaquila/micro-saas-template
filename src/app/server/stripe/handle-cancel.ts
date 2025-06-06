import { db } from "@/app/lib/firebase";
import resend from "@/app/lib/resend";

import "server-only"

import Stripe from "stripe";

export async function handleStripeCancelSubscription(
    event: Stripe.CustomerSubscriptionDeletedEvent
) {
        console.log("Cancelamento de assinatura bem-sucedido! Enviar um e-mail ao usuário para confirmar o cancelamento.");

        const customerId = event.data.object.customer;

        const userRef = await db.collection("users").where("stripeCustomerId", "==", customerId).get();
        if (userRef.empty) {
            console.error("User not found for customer ID:", customerId);
            return;
        }
        const userId = userRef.docs[0].id;
        const userEmail = userRef.docs[0].data().email;

        await db.collection("users").doc(userId).update({
            subscriptionStatus: "inactive",
        })

        const { data, error } = await resend.emails.send({
            from: 'Acme <your@email.com>',
            to: [userEmail],
            subject: 'Signature Cancelled',
            text: "Your signature has been cancelled successfully."
        });
}