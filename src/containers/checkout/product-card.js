import Image from "next/image";
import Rating from "@/components/Rating";
import React from "react";
import DeleteButton from "@/containers/checkout/delete-button";

function ProductCard({product}) {

    return (
        <article className={"flex items-center"}>
            <figure className={"flex-shrink-0 pr-4"}>
                <Image
                    src={product.image}
                    alt={product.title}
                    width={125}
                    height={125}
                    style={{width: 'auto', height: 'auto'}}
                />
            </figure>

            <div className={"grow flex flex-col justify-between"}>
                <div>
                    <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
                    <Rating rate={product.rating.rate}/>
                    <p className={"text-sm my-2 line-clamp-3"}>{product.description}</p>
                </div>

                <div className={"flex justify-between items-center"}>
                    <p className={"font-semibold"}>${product.price}</p>
                    <DeleteButton product={product}/>
                </div>
            </div>
        </article>

    )
}


export default ProductCard;