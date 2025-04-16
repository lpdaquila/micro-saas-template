import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import mpClient, { validateMercadoPagoWebhook } from "@/app/lib/mercado-pago";
import { Payment } from "mercadopago";
import { handleMercadoPagoPayment } from "@/app/server/mercado-pago/handle-payment";


export async function POST(req: NextRequest) {
    try {
        
        validateMercadoPagoWebhook(req);

        const body = await req.json();

        const { type, data } = body;

        // Webhook starts here

        switch(type) {
            case "payment":
                const payment = new Payment(mpClient)
                const paymentData = await payment.get({ id: data.id })
                if (paymentData.status === "approved" || paymentData.date_approved !== null) {
                    await handleMercadoPagoPayment(paymentData)
                }
                break;
            case "subscription_preapproval": // Signature event
                break;
            default:
                console.log("Event unsupported by this webhook")
        }

    } catch (error) {
        console.log("Mercado Pago Webhook Error")
    }
}
 