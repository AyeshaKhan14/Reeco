import React, { useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { setProductArr } from "../Redux/slices/product.slice";

export const EditPop = ({ isOpen, onClose, editselect }) => {
  const [newPrice, setNewPrice] = useState("");
  const [newQuant, setNewQuant] = useState("");
  const dispatch = useDispatch();
  const pro = useSelector((state) => state.product.productArr);
  const [prisel, setPrisel] = useState(false);
  const [quant, setQuant] = useState(false);
  const [checktotl, setCheckTotl] = useState(false);

  const handleQuantityChange = (amount) => {
    const updatedQuant = parseInt(newQuant, 10) + amount;
    if (updatedQuant >= 0) {
      setNewQuant(updatedQuant.toString());
    }
  };
  const handleSubmit = () => {
    if (editselect.Price >= 0) {
      const updatedPrice = pro.map((el) =>
        el.id === editselect.id ? { ...el, updatePrice: newPrice } : el
      );
      setPrisel(true);
      console.log("Updated Price:", updatedPrice);
      dispatch(setProductArr(updatedPrice));
    }

    if (editselect.quantity >= 0) {
      const updatedQuant = pro.map((el) =>
        el.id === editselect.id ? { ...el, updateQuant: newQuant } : el
      );
      setQuant(true);
      console.log("Updated Quant:", updatedQuant);
      dispatch(setProductArr(updatedQuant));
    }

    // if (prisel) {
    //   const totals = newPrice * editselect.total;
    //   const updatedPriceTotal = pro.map((el) =>
    //     el.id === editselect.id ? { ...el, updateTol: totals } : el
    //   );
    //   setPrisel(true);
    //   dispatch(setProductArr(updatedPriceTotal));
    // }

    onClose();
  };

  useEffect(() => {
    setNewPrice(editselect ? editselect.Price : "");
    setNewQuant(editselect ? editselect.quantity : "");
  }, [editselect]);

  if (!isOpen) return null;

  return (
    <main className='absolute top-0 left-0'>
      <div className='h-auth w-[40%] xl:h-screen xl:w-screen flex justify-center items-center'>
        {/* Pseudo-element for blurred background */}
        <div className='absolute inset-0 bg-gray-800 opacity-70 backdrop-blur-3xl'></div>

        <div className='w-[40%] ms-24 bg-white drop-shadow-xl relative'>
          {/* Closing Btn */}
          <div
            onClick={onClose}
            className='absolute top-3 right-3 cursor-pointer text-gray-600'
          >
            <RxCross1 className='text-black' />
          </div>
          {/* Modal content */}
          <div className='text-start p-3 px-8 text-black flex flex-col gap-8'>
            {/* Progress Bar */}
            <div className='my-3 flex flex-col gap-3'>
              <h1 className='text-teal-950 font-bold mb-4 text-xl text-start'>
                {editselect?.name}
              </h1>
              <div className='flex items-center gap-10'>
                <div className='h-[100px] w-[100px]'>
                  <img src={editselect.img} alt='' />
                </div>
                <div className='flex flex-col items-start justify-start gap-2'>
                  <p>Price $</p>
                  <p>Quantity</p>
                  <p>Total</p>
                </div>
                <div className='flex flex-col items-start justify-start gap-2'>
                  <div className='flex'>
                    <input
                      value={newPrice}
                      onChange={(e) => setNewPrice(e.target.value)}
                      className='w-[60px] border-2 outline-none rounded-md text-center'
                    />
                    <p>/6 * 1LB</p>
                  </div>
                  <div className=' flex items-center gap-2'>
                    <button
                      onClick={() => handleQuantityChange(-1)}
                      className='bg-green-600 rounded-full h-[30px] w-[30px] text-center text-white'
                    >
                      -
                    </button>
                    <input
                      value={newQuant}
                      onChange={(e) => setNewQuant(e.target.value)}
                      className='w-[60px] border-2 rounded-md text-center'
                    />
                    <button
                      onClick={() => handleQuantityChange(1)}
                      className='bg-green-600 rounded-full h-[30px] w-[30px] text-center text-white'
                    >
                      +
                    </button>{" "}
                    <p>/6 * 1LB</p>
                  </div>
                  <div>
                    {" "}
                    <input
                      value={
                        editselect.updateTol === 0
                          ? editselect.total
                          : editselect.updateTol
                      }
                      className='w-[60px] border-2 rounded-md outline-none text-center'
                    />
                  </div>
                </div>
              </div>
              <div className='text-black font-bold'>Choose Reason</div>
              <div className='w-full flex justify-between gap-2'>
                <button className='border-2 text-sm p-2 text-gray-500 rounded-full'>
                  Missing Product
                </button>
                <button className='border-2 text-sm p-2 text-gray-500 rounded-full'>
                  Quality is not the same
                </button>
                <button className='border-2 text-sm p-2 text-gray-500 rounded-full'>
                  Price is not the same
                </button>
                <button className='border-2 text-sm p-2 text-gray-500 rounded-full'>
                  others
                </button>
              </div>
              <div className='flex justify-end items-center gap-4'>
                <button className='border-2 border-green-600 text-green-700 font-medium  w-[80px] h-[35px]  rounded-full text-center'>
                  Cancel
                </button>
                <button
                  onClick={handleSubmit}
                  className='bg-green-700 rounded-full px-4 text-white font-medium p-2 text-center'
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
