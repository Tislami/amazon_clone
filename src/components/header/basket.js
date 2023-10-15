"use client"
import Link from "next/link";
import {AiOutlineShoppingCart} from "react-icons/ai";
import {useSelector} from "react-redux";


function Basket() {

    const count = useSelector(state =>state.basket.items.length)

    return <div>
        <Link
            className={"relative flex items-center link"}
            href={"/checkout"}>
            <span className={"absolute top-0 right-0 flex items-center justify-center md:right-10 w-4 h-4 p-2 bg-yellow-400 text-black font-bold rounded-full"}>
                {count}
            </span>
            <AiOutlineShoppingCart className={"h-10 w-10"}/>
            <p className={"hidden md:inline font-extrabold md:text-sm mt-2"}>Basket</p>
        </Link>
    </div>
}


export default Basket;