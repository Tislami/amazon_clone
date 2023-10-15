"use client"
import {useSession} from "next-auth/react";
import {useSelector} from "react-redux";
import {selectItems, selectTotals} from "@/services/redux/features/basketSlice";

function SubtotalSection() {

    const items = [

        {
            "id": 2,
            "title": "Mens Casual Premium Slim Fit T-Shirts ",
            "price": 22.3,
            "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
            "category": "men's clothing",
            "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
            "rating": {
                "rate": 4.1,
                "count": 259
            }
        },
        {
            "id": 3,
            "title": "Mens Cotton Jacket",
            "price": 55.99,
            "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
            "category": "men's clothing",
            "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
            "rating": {
                "rate": 4.7,
                "count": 500
            }
        }]

    const total = items.reduce((total, item) => total + item.price, 0)

    const session = true
    return (
        <aside className={"flex flex-col bg-white p-10 shadow-md"}>
            <h2 className={"whitespace-nowrap"}> Subtotal ({items.length} items):</h2>
            <span className={"font-bold"}> $ {total}</span>
            <button
                className={`primary-btn mt-2 
                ${!session && `from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed`}`}
                disabled={!session}>
                Proceed to checkout
            </button>
        </aside>
    )
}


export default SubtotalSection;

