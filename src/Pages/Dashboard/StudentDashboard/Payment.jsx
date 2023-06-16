import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";
import { Elements } from "@stripe/react-stripe-js";
import useCart from "../../../api/useCart";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)
const Payment = () => {
    const [cart] = useCart();
    return (
        <div>
              < p className="text-center mt-20 text-3xl font-bold underline underline-offset-8 decoration-wavy decoration-warning-content" > Payments Process</p>
              <Elements stripe={stripePromise}>
              <PaymentForm price={cart.price} />
              </Elements>
        </div>
    );
};

export default Payment;