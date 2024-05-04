import React from 'react'
import { Carousel } from "@material-tailwind/react"

export default function FlowCarousel() {
    return (
        <div className='pt-28'>
            <Carousel className="h-auto" autoplay={true} loop={true}
            navigation={({ setActiveIndex, activeIndex, length }) => (
                <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                    {new Array(length).fill("").map((_, i) => (
                        <span
                        key={i}
                        className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                            activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                        }`}
                        onClick={() => setActiveIndex(i)}
                        />
                    ))}
                </div>
            )}
            >
                <img
                    src="https://firebasestorage.googleapis.com/v0/b/proyecto-final-react-cod-c21ca.appspot.com/o/aorus.jpg?alt=media&token=8022fa32-fbcd-4e80-8f60-8b1540166be7"
                    alt="image 1"
                    className="h-full w-full object-cover"
                />
                <img
                    src="https://firebasestorage.googleapis.com/v0/b/proyecto-final-react-cod-c21ca.appspot.com/o/asus.jpg?alt=media&token=a61d9810-1c34-4917-90e5-cecbc993251b"
                    alt="image 2"
                    className="h-full w-full object-cover"
                />
                <img
                    src="https://firebasestorage.googleapis.com/v0/b/proyecto-final-react-cod-c21ca.appspot.com/o/corsair.jpg?alt=media&token=c672ab3b-e8df-4a46-97e3-587ddb828f31"
                    alt="image 3"
                    className="h-full w-full object-cover"
                />
                <img
                    src="https://firebasestorage.googleapis.com/v0/b/proyecto-final-react-cod-c21ca.appspot.com/o/fury.jpg?alt=media&token=147f0f55-ede4-4770-9305-403d41a60e5d"
                    alt="image 3"
                    className="h-full w-full object-cover"
                />
    </Carousel>
        </div>
    );
}
