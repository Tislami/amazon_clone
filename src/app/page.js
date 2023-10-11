import HomeBanner from "@/components/home/banner";
import ProductFeed from "@/components/home/product_feed";

export default function Home() {

    return <main className="max-w-screen-2xl mx-auto bg-gray-100" >
        <HomeBanner />
        <ProductFeed/>
    </main >
}

export async function generateStaticParams() {
    const products = await fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())

    console.log(products)

    return products.map((product) => ({
        params: {
            product: product,
            title : product.title
        },
    }))
}


