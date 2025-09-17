import React, { useState, useEffect } from 'react';
import { SlideshowImage } from '../types';

interface SlideshowProps {
    images: SlideshowImage[];
}

const Slideshow: React.FC<SlideshowProps> = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex: number) => {
        setCurrentIndex(slideIndex);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            goToNext();
        }, 5000); // Change slide every 5 seconds
        return () => clearTimeout(timer);
    }, [currentIndex, goToNext]);


    if (!images || images.length === 0) {
        return null;
    }

    return (
        <section className="h-[60vh] md:h-[70vh] w-full m-auto relative group">
            <div
                style={{ backgroundImage: `url(${images[currentIndex].image})` }}
                className="w-full h-full bg-center bg-cover duration-500"
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-center">
                    <div className="text-white px-4">
                         <h2 className="text-3xl md:text-5xl font-bold mb-4">{images[currentIndex].title}</h2>
                         <p className="text-lg md:text-xl max-w-3xl mx-auto">{images[currentIndex].subtitle}</p>
                    </div>
                </div>
            </div>

            {/* Left Arrow */}
            <div className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <button onClick={goToPrevious} aria-label="Previous slide">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                </button>
            </div>
            {/* Right Arrow */}
            <div className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <button onClick={goToNext} aria-label="Next slide">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                </button>
            </div>

            <div className="flex top-4 justify-center py-2 absolute bottom-5 left-1/2 -translate-x-1/2">
                {images.map((_, slideIndex) => (
                    <div
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                        className={`text-2xl cursor-pointer mx-1 ${currentIndex === slideIndex ? 'text-white' : 'text-gray-400'}`}
                        role="button"
                        aria-label={`Go to slide ${slideIndex + 1}`}
                    >
                        ●
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Slideshow;