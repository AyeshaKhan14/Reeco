import React from "react";
import { SlArrowLeft } from "react-icons/sl";

export const Nav2 = () => {
  return (
    <div className='h-[80px] shadow-lg w-full bg-zinc-100 flex items-center'>
      <div className='w-[80%] m-auto flex justify-between'>
        <div className='flex flex-col gap-4'>
          <div className='flex gap-2 items-center text-gray-500'>
            Orders{" "}
            <span>
              <SlArrowLeft className='text' />
            </span>{" "}
            <span className='underline'>orders 342356AD89</span>
          </div>
          <div className='text-lg text-black font-bold'>Orders 342356AD89</div>
        </div>
        <div className='flex gap-4 items-end'>
          <button className='border-2 border-green-600 text-green-700 font-medium  w-[60px] h-[35px]  rounded-full text-center'>
            Back
          </button>
          <button className='bg-green-700 rounded-full px-4 text-white font-medium p-2 text-center'>
            Approve Order
          </button>
        </div>
      </div>
    </div>
  );
};
