"use client";
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


const bannerImages = [
    "https://links.papareact.com/gi1",
    "https://links.papareact.com/6ff",
    "https://links.papareact.com/7ma"
]

const HomeBanner = () => {
    return <section className={"relative"} >
        <div className={"absolute bottom-0 w-full h-32 bg-gradient-to-t from-gray-100 to-transparent z-20 "}/>
        <Carousel
            autoPlay
            infiniteLoop
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            interval={1000}
            className={"h-10"}
        >
            {bannerImages.map((image, index) => (
                <div key={index}>
                    <img
                        src={image}
                        alt={"banner image"}
                        loading={"lazy"}
                    />
                </div >
            ))}
        </Carousel >
    </section >
}


export default HomeBanner;