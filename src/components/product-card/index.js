import React from 'react'
import Image from "next/image";
import {AiFillStar} from "react-icons/ai";
import AddButton from "@/components/product-card/add-button";
import Rating from "@/components/Rating";

const ProductCard = ({product}) => {
    return <article className={"relative flex flex-col m-5 p-10 z-30 bg-white"} >
        <p className={"absolute top-2 right-2 text-xs italic text-gray-400"} >{product.category}</p >

        <figure className={"relative mx-auto w-48 h-48 object-cover"}>
            <Image
                src={product.image}
                alt={product.title}
                fill
                sizes={"100%"}
                className={"absolute top-0 bottom-0 left-0 right-0"}
            />
        </figure>

        <div className={"w-full flex items-center flex-col justify-between flex-shrink flex-grow"}>
            <h4 className={"my-3 line-clamp-2"} >{product.title}</h4 >
            <Rating rate={product.rating.rate} />
            <p className={"text-xs my-2 line-clamp-2"} >{product.description}</p >

        </div>

        <AddButton product={product}/>
    </article >
}





export default ProductCard