import React from 'react';
import product1 from "../../assets/men1.jpeg";
import product2 from "../../assets/men2.jpeg";
import product3 from "../../assets/men3.jpeg";
import product4 from "../../assets/men4.jpeg";
import product5 from "../../assets/men5.jpeg";
import { FaStar } from 'react-icons/fa6';

const ProductsData = [
  {
    id: 1,
    image: product1,
    title: "Women Ethnic Wear",
    rating: 5.0,
    color: "red",
    aosDelay: "100",
  },
  {
    id: 2,
    image: product2,
    title: "Women Ethnic Wear",
    rating: 5.0,
    color: "white",
    aosDelay: "200",
  },
  {
    id: 3,
    image: product3,
    title: "Women Ethnic Wear",
    rating: 5.0,
    color: "blue",
    aosDelay: "300",
  },
  {
    id: 4,
    image: product4,
    title: "Women Ethnic Wear",
    rating: 5.0,
    color: "green",
    aosDelay: "400",
  },
  {
    id: 5,
    image: product5,
    title: "Women Ethnic Wear",
    rating: 5.0,
    color: "yellow",
    aosDelay: "500",
  },
];

const TopProducts = ({ handleOrderPopup }) => {
  return (
    <div className='dark:bg-gray-950 dark:text-white'>
      <div className="container">
        {/* Header Section */}
        <div className="text-left mb-24">
          <p data-aos="fade-up" className="text-sm text-primary">Top Rated Products for you</p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">Best Products</h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing</p>
        </div>

        {/* Body Section */}
        <div data-aos="zoom-in" className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
          {ProductsData.map((data) => (
            <div key={data.id} className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]">
              {/* Image Section */}
              <div className="h-[100px]">
                <img src={data.image} alt="" className="h-[220px] w-[150px] object-cover rounded-md max-w-[140px] mt-[50px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"/>
              </div>
              
              {/* Content Section */}
              <div className='p-4 text-center'>
                {/* Star Rating */}
                <div className='w-full flex items-center justify-center gap-1'> 
                  <FaStar className="text-yellow-400"/>
                  <FaStar className="text-yellow-400"/>
                  <FaStar className="text-yellow-400"/>
                  <FaStar className="text-yellow-400"/>
                </div>
                <h1 className='text-xl font-bold'>{data.title}</h1>
                <p className='text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2'>{data.color}</p>
                <button onClick={handleOrderPopup} className='bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full hover:scale-105 duration-200'>
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
