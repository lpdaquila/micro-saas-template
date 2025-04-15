"use client";

import { useStripe } from "@/app/hooks/useStripe";

export default function PaymentPage() {

    const {
        createPaymentStripeCheckout,
        createSubscriptionScriptCheckout,
        handleCreateStripePortal,   
    } = useStripe();

    return (
        <div className="flex flex-col gap-10 items-center justify-center h-screen bg-gray-200">
            <h1 className="text-4xl font-bold text-gray-800">Payment Page</h1>
                <button 
                    className="border rounded-md px-1" 
                    onClick={() => 
                        createPaymentStripeCheckout({
                            testId: "123",
                        })}
                >
                    Create Stripe Payment
                    </button>
                <button 
                    className="border rounded-md px-1"
                    onClick={() => 
                        createSubscriptionScriptCheckout({
                            testId: "123",
                        })}
                >
                    Create Stripe Subscription
                    </button>
                <button 
                    className="border rounded-md px-1"
                    onClick={handleCreateStripePortal}
                >
                    Manage Stripe Portal
                    </button>
            {/* <p>Manage your payment methods and subscriptions here.</p>
            Add your payment management UI here */}
        </div>
    );
}