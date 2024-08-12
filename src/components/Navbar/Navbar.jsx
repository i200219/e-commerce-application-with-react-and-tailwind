import React from 'react';
import shop from "../../assets/shop.jpeg";
import { IoSearchSharp } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";
import { FaCaretDown } from 'react-icons/fa';

const Menu = [
  { id: 1, name: "Home", link: "/#" },
  { id: 2, name: "Top Rated", link: "/#services" },
  { id: 3, name: "Kids Wear", link: "/#" },
  { id: 4, name: "Mens Wear", link: "/#" },
  { id: 5, name: "Electronics", link: "/#" },
];

const DropdownLinks = [
  { id: 1, name: "Trending", link: "/#" },
  { id: 2, name: "Top Rated", link: "/#" },
  { id: 3, name: "New Arrivals", link: "/#" },
  { id: 4, name: "Best Seller", link: "/#" },
];

const Navbar = ({ handleOrderPopup }) => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* Upper Navbar */}
      <div className="bg-primary/40 py-3 sm:py-2">
        <div className="container flex justify-between items-center">
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={shop} alt="logo" className="w-10 uppercase" /> Shopify
            </a>
          </div>
          {/* Search bar */}
          <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className="w-[200px] sm:w-[300px] transition-all duration-300 ease-in-out rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-primary dark:border-gray-500 dark:bg-gray-800"
              />
              <IoSearchSharp
                className="text-gray-500 group-hover:text-primary absolute right-3 top-1/2 transform -translate-y-1/2"
              />
            </div>
          </div>
          {/* Order button */}
          <button
            onClick={handleOrderPopup}
            className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white px-4 py-1 rounded-full flex items-center gap-3 group"
          >
            <span className="group-hover:block hidden transition-all duration-200">Order</span>
            <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
          </button>
          {/* Switch mode */}
          <div>
            <DarkMode />
          </div>
        </div>
      </div>

      {/* Lower Navbar */}
      <div data-aos="zoom-out" className="flex justify-center">
        <ul className="sm:flex hidden items-center">
          {Menu.map((item) => (
            <li key={item.id} className="inline-block">
              <a href={item.link} className="px-4 hover:text-primary duration-200 inline-block">{item.name}</a>
            </li>
          ))}
          {/* Simple dropdown */}
          <li className="relative group">
            <a href="#" className="flex items-center gap-[2px] py-2">
              Trending Product
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
              <ul>
                {DropdownLinks.map((item) => (
                  <li key={item.id}>
                    <a href={item.link} className="inline-block w-full rounded-md p-2 hover:bg-primary/20">{item.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
