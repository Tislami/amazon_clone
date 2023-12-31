import HomeBanner from "@/containers/home/banner";
import ProductFeed from "@/containers/home/product_feed";
import Link from "next/link";

export default function Home() {

    return <main className="max-w-screen-2xl mx-auto" >
        <HomeBanner />
        <ProductFeed/>
    </main >
}

export async function generateStaticParams() {
    const products = await fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())

    return products.map((product) => ({
        params: {
            product: product,
            title : product.title
        },
    }))
}


