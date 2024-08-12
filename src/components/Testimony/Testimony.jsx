import React from 'react';
import bur1 from "../../assets/bur1.jpeg";
import bur2 from "../../assets/bur2.jpeg";
import bur3 from "../../assets/bur3.jpeg";
import bur4 from "../../assets/bur4.jpeg";
import bur5 from "../../assets/bur5.jpeg";
import Slider from 'react-slick';

const TestimonyData = [
    {
        id: 1,
        image: bur1,
        name: "John Doe",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    },
    {
        id: 2,
        image: bur2,
        name: "Innocent Ndayizeye",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    },
    {
        id: 3,
        image: bur3,
        name: "karibu",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    },
    {
        id: 4,
        image: bur4,
        name: "maragarita",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    },
    {
        id: 5,
        image: bur5,
        name: "samuel",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    },
];

const Testimony = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                }
            }
        ]
    }

    return (
        <div className='py-10 mb-10'>
            <div className='container'>
                {/* Header Section */}
                <div className="text-center mb-10 max-w-[600px] mx-auto">
                    <p data-aos="fade-up" className="text-sm text-primary">What our customers say</p>
                    <h1 data-aos="fade-up" className="text-3xl font-bold">Testimonials</h1>
                    <p data-aos="fade-up" className="text-xs text-gray-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>
                {/* Testimonial Section */}
                <div data-aos="zoom-in">
                    <Slider {...settings}>
                        {TestimonyData.map((data) => (
                            <div key={data.id} className='my-6'>
                                <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative">
                                    <div className='mb-4'>
                                        <img src={data.image} alt={data.name} className='rounded-full w-20 h-20' />
                                    </div>
                                    <div className='flex flex-col items-center'>
                                        <div className='space-y-3'>
                                            <p className='text-xs text-gray-500'>{data.text}</p>
                                            <h1 className='text-xl font-bold text-black/80 dark:text-light'>{data.name}</h1>
                                        </div>
                                    </div>
                                    <p className='text-black/20 text-9xl font-serif absolute top-0 right-0'></p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default Testimony;
