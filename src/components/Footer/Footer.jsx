import React from 'react'
import logo from '../../assets/shop.jpeg'


import {
    FaFacebook,
    FaTwitter,
    FaYoutube,
    FaLinkedin,
    FaInstagram,
    FaLocationArrow,
    FaMobileAlt,
} from "react-icons/fa";


const FooterLinks =[
    {
        id:1,
        name:"Home",
        links:"/#",
    },
    {
        id:2,
        name:"About Us",
        links:"/#",
    },
    {
        id:3,
        name:"Contact Us",
        links:"/#",
    },
    {
        id:4,
        name:"FAQ",
        links:"/#",
    },
]
const Footer = () => {
  return (
    <div data-aos="zoom-in" className='text-white mb-20 bg-black '>
    <div className='container'>
      <div className='grid md:grid-cols-3 pv-44 pt-5'>
        {/*company details*/}
        <div className='py-8 px-4'>
            <h1 className="
            sm:text-3xl text-xl font-bold sm:text-left
            text-justify mb-3 flex items-center gap-3">
                <img src={logo} alt=""
                className='max-w-[50px]'/>
                Shopify</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        {/*footer links*/}
        <div className='grid grid-cols-2 sm:grid-cols-3 cols-span-2 md:pl-10 '>
            <div>
                <div className='py-8 px-4'>
                    <h1 className='sm:text-xl text-xl font-bold sm:text-left text-justify mb-3'>Important Links</h1>
                    <ul className='flex flex-col gap-3'>
                        {
                            FooterLinks.map((data)=>{
                                
                                    <li key={data.id} className='cursor-pointer hover:text-primary
                                      hover:translate-x-1 duration-300 text-gray-200 '><a href={data.links}>{data.name}</a></li>
                                
                            })
                        }
                    </ul>
                </div>
            </div>
            {/*social links*/}
            <div className='flex items-center gap-3 mt-6'>
                    <a href="#" className='text-primary'>
                        <FaInstagram className='text-3xl'/>
                    </a>
                    <a href="#" className='text-primary'>
                        <FaFacebook className='text-3xl'/>
                    </a>
                    <a href="#" className='text-primary'>
                        <FaTwitter className='text-3xl'/>
                    </a>
                    <a href="#" className='text-primary'>
                        <FaYoutube className='text-3xl'/>
                    </a>
                    <a href="#" className='text-primary'>
                        <FaLinkedin className='text-3xl'/>
                    </a>
                </div>
                <div className='mt-6 flex ml-4 w-[100%]'>
                    <div className='flex items-center gap-3'>
                        <FaLocationArrow/>
                        <p>Nairobi, Kenya</p>
                    </div>
                    <div className='flex items-center gap-3 mt-3'>
                        <FaMobileAlt/>
                        <p>+254 712 345 678</p>
                    </div>
                </div>
            </div>
            </div>
            </div>
        
    </div>
  )
}

export default Footer
