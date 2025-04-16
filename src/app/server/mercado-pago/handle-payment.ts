import resend from "@/app/lib/resend";
import { PaymentResponse } from "mercadopago/dist/clients/payment/commonTypes"

export async function handleMercadoPagoPayment(paymentData: PaymentResponse) {
    const metadata = paymentData.metadata;
    const userEmail = metadata.user_email;
    const testId = metadata.test_id;
    console.log("Payment Successful", { testId, userEmail, paymentData });

    const { data, error } = await resend.emails.send({
        from: 'Acme <your@email.com>',
        to: [userEmail],
        subject: 'Hello world',
        text: "Payment Ok"
    });
}