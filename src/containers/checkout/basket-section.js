import Image from "next/image";

const popUpImage = "https://links.papareact.com/ikj"
function BasketSection() {
    return <section>
        <div className={"flex-grow m-5 shadow-sm"}>
            <Image
                src={popUpImage}
                alt={"popup image"}
                width={1020}
                height={250}
            />
        </div>

        <div className={"flex flex-col p-5 space-y-10 bg-white "}>
            <h1 className={"text-3xl border-b pb-4"}>Your Shopping Basket</h1>
        </div>

    </section>
}




export default BasketSection