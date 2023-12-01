import { SlBasket } from "react-icons/sl";

export const Nav = () => {
  return (
    <div className='h-[45px] w-full bg-green-700 flex items-center'>
      <div className='w-[80%] m-auto flex text-white font-medium items-center justify-between'>
        <div className='flex justify-between items-center gap-6'>
          <h3 className='font-bold text-xl'>Recco</h3>
          <p>Store</p>
          <p>Orders</p>
          <p>Analytics</p>
        </div>
        <div className='flex items-center gap-10'>
          <div>
            <SlBasket className='text-white text-xl font-bold' />
          </div>
          <div>Hii James </div>
        </div>
      </div>
    </div>
  );
};
