import Image from "next/image";
import {AiOutlineMenu, AiOutlineSearch, AiOutlineShoppingCart} from "react-icons/ai";
import AuthSection from "@/components/header/auth-section";
import Link from "next/link";
import Basket from "@/components/header/basket";

const logoUrl = "https://links.papareact.com/f90"

function Header() {
    return <header >
        <TopContainer />
        <BottomContainer />
    </header >
}


const TopContainer = () => {
    return <div className={"flex flex-grow items-center bg-amazon_blue p-1 py-2  "} >
        <Logo />
        <Search />
         
        <div className={"flex items-center mx-6 text-white text-xs space-x-6 whitespace-nowrap"} >
            <AuthSection />
            <ReturnsOrders />
            <Basket />
        </div >

    </div >
}

const BottomContainer = () => {
    return <nav className={"flex items-center space-x-3 p-2 pl-6  bg-amazon_blue-light text-white text-sm"} >
        <ul className={"flex items-center space-x-3"} >
            <li className={"link flex items-center"} >
                <AiOutlineMenu className={"h-6 mr-1"} />
                All
            </li >
            <li className={"link"} >Prime Video</li >
            <li className={"link"} >Amazon Business</li >
            <li className={"link"} >Today's Deals</li >
            <li className={"link hidden lg:inline-flex"} >Electronics</li >
            <li className={"link hidden lg:inline-flex"} >Food & Grocery</li >
            <li className={"link hidden lg:inline-flex"} >Prime</li >
            <li className={"link hidden lg:inline-flex"} >Buy Again</li >
            <li className={"link hidden lg:inline-flex"} >Shopper Toolkit</li >
            <li className={"link hidden lg:inline-flex"} >Health & Personal Care</li >
        </ul >
    </nav >
}


const Logo = () => {
    return <div className={"mt-2 flex items-center flex-grow sm:flex-grow-0 "} >
        <Link
            className={"cursor-pointer"}
            href={"/"} >
            <figure>
                <Image
                    src={logoUrl}
                    alt={"Logo"}
                    width={150}
                    height={40}
                    style={{ width: 'auto', height: 'auto' }}
                />
            </figure>
        </Link >
    </div >
}
const Search = () => {
    return <div
        className={"h-10 ml-6 sm:flex items-center flex-grow hidden rounded-md bg-yellow-400 hover:bg-yellow-500 cursor-pointer"} >
        <input
            type="text"
            className={"h-full w-6 p-2 flex-grow flex-shrink rounded-l-md focus:outline-none"} />
        <AiOutlineSearch className={"h-12 w-12 p-4"} />
    </div >
}

const ReturnsOrders = () => {
    return <div className={"link"} >
        <p >Returns</p >
        <p className={"font-extrabold md:text-sm"} >& Orders</p >
    </div >
}



export default Header