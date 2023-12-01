import React from "react";
import { InfoDiv } from "./InfoDiv";
import { ProductTable } from "./ProductTable";

export const Section = () => {
  return (
    <div className=' p-6'>
      <div className='w-[85%] m-auto flex flex-col gap-6'>
        <InfoDiv />
        <ProductTable />
      </div>
    </div>
  );
};
