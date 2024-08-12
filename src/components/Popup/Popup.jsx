import React from 'react';
import { IoCloseOutline } from 'react-icons/io5';

const Popup = ({ orderPopup, setOrderPopup }) => {
  return (
    <>
      {orderPopup && (
        <div className="popup">
          <div
            className="h-screen w-screen fixed top-0 left-0 bg-black/50
            z-50 backdrop-blur-sm"
            aria-hidden="true"
          >
            <div
              className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
              p-4 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 w-[300px]"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h1 className="text-lg font-semibold">Order Now</h1>
                </div>
                <div>
                  <IoCloseOutline
                    className="text-2xl cursor-pointer"
                    onClick={() => setOrderPopup(false)}
                  />
                </div>
              </div>
              {/* Add more content here */}
              <div className='mt-4'>
                <input type="text" placeholder="Enter your Name" className='w-full p-3 mt-2 rounded-full
                border border-gray-300 dark:border-gray-500 dark:bg-gray-800' />

<input type="email" placeholder="Enter your email" className='w-full p-3 mt-2 rounded-full
                border border-gray-300 dark:border-gray-500 dark:bg-gray-800' />

<input type="text" placeholder="Enter your Address" className='w-full p-3 mt-2 rounded-full
                border border-gray-300 dark:border-gray-500 dark:bg-gray-800' />
                 <div className='flex justify-center'>
                 <button className='bg-gradient-to-r from-primary to-secondary
            transition-all duration-200 text-white
            px-4 py-1 rounded-full flex items-center gap-3 group'>
                    Order Now
                 </button>
                 </div>
                 
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
