import React from 'react'
import Image from "next/image";
import {AiFillStar} from "react-icons/ai";

const ProductCard = ({product}) => {
    return <div className={"relative flex flex-col m-5 p-10 z-30 bg-white"} >
        <p className={"absolute top-2 right-2 text-xs italic text-gray-400"} >{product.category}</p >

        <div className={"relative mx-auto w-48 h-48 object-cover"}>
            <Image
                src={product.image}
                alt={product.title}
                fill
                sizes={"100%"}
                objectFit={"contain"}
                className={"absolute top-0 bottom-0 left-0 right-0"}
            />
        </div>

        <div className={"w-full flex flex-col justify-between flex-shrink flex-grow"}>
            <h4 className={"my-3 line-clamp-2"} >{product.title}</h4 >
            <Rating count={product.rating.rate} />
            <p className={"text-xs my-2 line-clamp-2"} >{product.description}</p >
            <p className={"mb-5 font-semibold "} >${product.price}</p >
        </div>

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