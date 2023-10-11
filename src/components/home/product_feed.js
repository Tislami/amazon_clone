import React from 'react'
import ProductCard from "@/components/product/product_card";

async function getProducts() {
    const response = await fetch("https://fakestoreapi.com/products")

    if (!response.ok) {
        throw new Error(response.statusText)
    }

    return response.json()
}


async function ProductFeed(){
    const products = await getProducts()

    return <section className={"grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 "}>
        {
            products.map((product) => (
               <ProductCard product={product} key={product.id} />
            ))
        }

    </section >
}





export default ProductFeed