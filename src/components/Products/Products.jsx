import React from 'react'
import product1 from "../../assets/product1.jpeg"
import product2 from "../../assets/product2.jpeg"
import product3 from "../../assets/product3.jpeg"
import product4 from "../../assets/product4.jpeg"
import product5 from "../../assets/product5.jpeg"
import { FaStar } from 'react-icons/fa6'

const ProductsData=[
    {
        id:1,
        image:product1,
        title:"Women Ethnic Wear",
        rating: 5.0,
        color:"red",
        aosDelay:"100",
    },
    {
        id:2,
        image:product2,
        title:"Women Ethnic Wear",
        rating: 5.0,
        color:"white",
        aosDelay:"200",
    },
    {
        id:3,
        image:product3,
        title:"Women Ethnic Wear",
        rating: 5.0,
        color:"blue",
        aosDelay:"300"
    },
    {
        id:4,
        image:product4,
        title:"Women Ethnic Wear",
        rating: 5.0,
        color:"green",
        aosDelay:"400",
    },
    {
        id:5,
        image:product5,
        title:"Women Ethnic Wear",
        rating: 5.0,
        color:"yellow",
        aosDelay:"500",
    },
]
const Products = () => {
  return (
    <div className="mt-14 mb-12 dark:bg-gray-950 dark:text-white">
      <div className="container">
        {/*header section*/}
        <div className="text-center mb-10 max-w=[600px] mx-auto">
            <p data-aos="fade-up" className="text-sm text-primary">Top Selling Products for you</p>
            <h1 data-aos="fade-up" className="text-3xl font-bold">Products</h1>
            <p data-aos="fade-up" className="text-xs tex-gray-400">Lorem ipsum dolor sit amet
                consectetur adipisicing
            </p>
        </div>
        {/*body section*/}
        <div>
            <div className=" grid grid-cols-1 sm:grid-cols-3
            md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
                {/*product card*/}
                {
                    ProductsData.map((data)=>(
                        <div 
                        data-aos="fade-up"
                        data-aos-delay={data.aosDelay}
                        key={data.id} className="space-y-3">
                            <img src={data.image} alt="" className="
                            h-[220px] w-[150px] object-cover rounded-md"/>
                            <div className="mt-3">
                                <h1 className="font-semibold">{data.title}</h1>
                                <p className="text-sm text-gray-600">{data.color}</p>
                                <div className="flex items-center gap-1">
                                    <FaStar className="text-yellow-400"/>
                                    
                                    <span>{data.rating}</span>
                                </div>
                            </div>
                        </div>
                    )) 
                }
            </div>
            {/*veiw all section*/}
            <div className='flex justify-center mt-10 cursor-pointer
            bg-primary text-white py-1 rounded-md'>
            <button>
              View all
            </button>
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default Products
