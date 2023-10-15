"use client"
import {useDispatch, useSelector} from "react-redux";
import {addToBasket, removeFromBasket} from "@/services/redux/features/basketSlice";
import React from "react";


function AddButton({product}) {

    const dispatch = useDispatch()

    const isBasket = useSelector(state =>
        state.basket.items.find(item => item.id === product.id)
    )
    const addItemToBasket = () => {
        dispatch(addToBasket(product))
    }

    const removeItemFromBasket = () => {
        dispatch(removeFromBasket(product))
    }

    return (
        <button
            onClick={
                isBasket ? removeItemFromBasket : addItemToBasket
            }
            className={"mt-auto primary-btn"}>
            {
                isBasket ? "Remove to Basket" : "Add to Basket"
            }
        </button>
    )
}


export default AddButton;