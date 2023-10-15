"use client"
import {removeFromBasket} from "@/services/redux/features/basketSlice";
import {useDispatch} from "react-redux";
import React from "react";


function DeleteButton({product}) {

    const dispatch = useDispatch()

    const removeItemFromBasket = () => {
        dispatch(removeFromBasket(product))
    }
    return (
        <button
            onClick={removeItemFromBasket}
            className={"text-blue-400"}>
            Delete
        </button>
    )
}


export default DeleteButton;