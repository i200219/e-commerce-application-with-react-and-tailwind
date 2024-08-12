import React from 'react';
import hero from "../../assets/hero.jpeg";
import hero1 from "../../assets/hero1.jpeg";
import hero2 from "../../assets/hero2.jpeg";
import Slider from "react-slick";
import { FaHeartPulse } from 'react-icons/fa6';

const ImageList = [
  {
    id: 1,
    image: hero,
    title: "Up to 50% off on selected products",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    image: hero1,
    title: "Up to 50% off on selected products",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    image: hero2,
    title: "Up to 50% off on selected products",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  }
];

const Hero = ({ handleOrderPopup }) => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true
  };

  return (
    <div className="relative overflow-hidden min-h-[550px]
    sm:min-h-[650px] bg-gray-100 flex justify-center items-center
    dark:bg-gray-950 dark:text-white duration-200">
      {/* Background pattern */}
      <div className="h-[700px] w-[700px]
      bg-primary/40 absolute right-0 -top-1/2 rounded-3xl rotate-45 -z-9"></div>

      {/* Hero section */}
      <div className="container pb-8 sm:pb-0">
        {/* Slider */}
        <Slider {...settings}>
          {/* Slider content */}
          {ImageList.map((data) => (
            <div key={data.id}>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                {/* Text content section */}
                <div className="flex flex-col justify-center
                gap-4 pt-12 sm:pt-0 text-center sm:text-left order-4
                sm:order-1 relative z-10">
                  <h1
                    data-aos="zoom-out"
                    data-aos-once="true"
                    data-aos-duration="500"
                    className='text-5xl sm:text-6xl lg:text-7xl font-bold dark:text-white'>
                    {data.title}
                  </h1>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="300"
                    className="text-sm dark:text-white">
                    {data.description}
                  </p>
                  <div>
                    <button onClick={handleOrderPopup} className="bg-gradient-to-r 
                    from-primary to-secondary text-white px-4 py-2 rounded-full
                    hover:scale-105 duration-200">
                      Shop Now
                    </button>
                  </div>
                </div>

                {/* Image section */}
                <div className="order-1 sm:order-2">
                  <div
                    data-aos="zoom-in"
                    data-aos-once="true"
                    className="relative z-10">
                    <img src={data.image} alt="hero" className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] 
                    lg:scale-120 sm:scale-125 object-contain max-auto" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
