import { SlBadge } from "react-icons/sl";
import { SlLayers } from "react-icons/sl";
import { SlPresent } from "react-icons/sl";
import { SlSocialDropbox } from "react-icons/sl";

export const InfoDiv = () => {
  return (
    <div className='border-2 w-full rounded-md border-gray-200 flex flex-wrap '>
      <div className='p-6 w-[15%] flex flex-col gap-2 border-2 border-l-0 border-t-0 border-b-0 '>
        <p className='text-gray-500'>Supplier</p>
        <h2 className='font-bold'>East Fruits and Vegetable</h2>
      </div>
      <div className='p-6 w-[15%] flex flex-col gap-2 border-2 border-l-0 border-t-0 border-b-0 '>
        <p className='text-gray-500'>Shipping Date</p>
        <h2 className='font-bold'>Thur 31st Oct</h2>
      </div>
      <div className='p-6 w-[15%] flex flex-col gap-2 border-2 border-l-0 border-t-0 border-b-0 '>
        <p className='text-gray-500'>Total</p>
        <h2 className='font-bold'>$15900.35</h2>
      </div>
      <div className='p-6 w-[20%] flex flex-col gap-2  items-center border-2 border-l-0 border-t-0 border-b-0 '>
        <p className='text-gray-500'>Category</p>
        <div className='flex items-center gap-4'>
          <SlBadge /> <SlLayers /> <SlPresent /> <SlSocialDropbox />
        </div>
        <div className='flex items-center gap-4'>
          <SlLayers /> <SlBadge />
          <SlSocialDropbox /> <SlPresent />
        </div>
      </div>
      <div className='p-6 w-[15%] flex flex-col gap-2 border-2 border-l-0 border-t-0 border-b-0 '>
        <p className='text-gray-500'>Department</p>
        <p className='font-bold text-black'>334-5095-909</p>
      </div>
      <div className='p-6 w-[20%] flex flex-col gap-2 border-2 border-l-0 border-t-0 border-b-0 border-r-0'>
        {" "}
        <p className='text-gray-500'>Status</p>
        <p className='font-bold text-black '>Awaiting your approvel</p>
      </div>
    </div>
  );
};
