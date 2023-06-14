import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";

const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements()
    const [errorCard, setErrorCard] = useState('')
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || elements) {
            return;
        }
        const card = elements.getElement(CardElement)
        if (card === null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            console.log('error', error);
            setErrorCard(error.message)
        }
        else {
            console.log('payment method', paymentMethod);
            setErrorCard('')
        }
    }
    return (
        <>
            <form className="w-1/3 mx-auto mt-44" onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="bg-black w-full btn mt-10 mb-3 text-white hover:text-black hover:border-2 transition px-8 py-2 rounded hover:bg-white border-red-400 font-bold" type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>
            {errorCard && <p className="text-error">{errorCard}</p>}
        </>
    );
};

export default PaymentForm;