import BasketSection from "@/containers/checkout/basket-section";
import SubtotalSection from "@/containers/checkout/subtotal-section";


function Checkout() {
    return <main className={"lg:flex max-w-screen-2xl mx-auto"}>
        <BasketSection />
        <SubtotalSection/>
    </main>
}



export default Checkout