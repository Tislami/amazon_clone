import BasketSection from "@/containers/checkout/basket-section";
import SubtotalSection from "@/containers/checkout/subtotal-section";
import {loadStripe} from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.stripe_public_key);

function Checkout() {
    return <main className={"lg:flex max-w-screen-2xl mx-auto"}>
        <BasketSection />
        <SubtotalSection/>
    </main>
}



export default Checkout