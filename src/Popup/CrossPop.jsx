import { RxCross1 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { setProductArr } from "../Redux/slices/product.slice";

export const CrossPop = ({ isOpen, onClose, crossselect }) => {
  const pro = useSelector((state) => state.product.productArr);

  const dispatch = useDispatch();
  if (!isOpen) return null;

  const handleNo = () => {
    if (crossselect && crossselect.id) {
      const updatedData = pro.map((el) =>
        el.id === crossselect.id ? { ...el, status: "Missing" } : el
      );
      console.log("Updated Data:", updatedData);
      dispatch(setProductArr(updatedData));
      //getData();
    }
    onClose();
  };
  const handleYes = () => {
    if (crossselect && crossselect.id) {
      const updatedData = pro.map((el) =>
        el.id === crossselect.id ? { ...el, status: "Missing Urgent" } : el
      );
      console.log("Updated Data:", updatedData);
      dispatch(setProductArr(updatedData));
    }
    onClose();
  };

  return (
    <main className='absolute max-h-screen overflow-y-auto top-0 left-0'>
      <div className='h-auth w-[40%] xl:h-screen xl:w-screen flex justify-center items-center'>
        {/* Pseudo-element for blurred background */}
        <div className='absolute inset-0 bg-gray-800 opacity-70 backdrop-blur-3xl'></div>

        <div className='w-[25%] ms-24 bg-white drop-shadow-xl relative'>
          {/* Closing Btn */}
          <div
            onClick={onClose}
            className='absolute top-3 right-3 cursor-pointer text-gray-600'
          >
            <RxCross1 className='text-black font-bold' />
          </div>
          {/* Modal content */}
          <div className='text-start p-3 px-8 text-black flex flex-col gap-8'>
            {/* Progress Bar */}
            <div className='my-3 flex flex-col gap-3'>
              <h1 className='text-teal-950 font-bold mb-4 text-xl text-start'>
                Missing Product
              </h1>
              <div className='flex flex-col gap-4'>
                <p>{crossselect.name}..."Urgent"?</p>
                <div className='flex justify-end items-center gap-4'>
                  <button
                    className='text-red-600 font-sans font-bold'
                    onClick={() => handleNo(crossselect.id)}
                  >
                    No
                  </button>
                  <button
                    className='text-red-600 font-sans font-bold'
                    onClick={() => handleYes(crossselect.id)}
                  >
                    Yes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
