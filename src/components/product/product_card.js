import React from 'react'
import Image from "next/image";
import {AiFillStar} from "react-icons/ai";

const ProductCard = ({product}) => {
    return <div className={"relative flex flex-col m-5 p-10 z-30 bg-white"} >
        <p className={"absolute top-2 right-2 text-xs italic text-gray-400"} >{product.category}</p >

        <div className={"flex   items-center justify-center w-full"}>
            <Image
                src={product.image}
                alt={product.title}
                objectFit={"contain"}
                height={200}
                width={200}
            />
        </div>


        <h4 className={"my-3 "} >{product.title}</h4 >
        <Rating count={product.rating.rate} />
        <p className={"text-xs my-2 line-clamp-2"} >{product.description}</p >
        <p className={"mb-5"} >${product.price}</p >

        <button className={"mt-auto primary-btn"} >Add to Basket</button >


    </div >
}


const Rating = ({count}) => {
    return <div className={"flex items-center justify-center h-5"} >
        {
            Array(parseInt(count)).fill().map((_, i) => (
                <AiFillStar className={"text-yellow-500"} key={i} />
            ))
        }
    </div >
}


export default ProductCard