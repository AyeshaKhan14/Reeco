import React, { useEffect, useState } from "react";
import { data } from "../Data/data.js";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setProductArr } from "../Redux/slices/product.slice.js";
import { RxCross2 } from "react-icons/rx";
import { CrossPop } from "../Popup/CrossPop.jsx";
import { FaCheck } from "react-icons/fa";
import { EditPop } from "../Popup/EditPop.jsx";
import { CiSearch } from "react-icons/ci";
import { IoPrintOutline } from "react-icons/io5";

export const ProductTable = () => {
  const dispatch = useDispatch();
  const pro = useSelector((state) => state.product.productArr);
  const load = useSelector((state) => state.product.loading);
  const [tick, setTick] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [crossselect, setCrossSelect] = useState(null);
  const [editselect, setEditSelect] = useState(null);
  const [editModal, setEditModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const toggle = () => {
    setIsModalOpen((prev) => !prev);
  };
  const toggle2 = () => {
    setEditModal((prev) => !prev);
  };

  const getData = async () => {
    dispatch(setLoading(true));
    try {
      const fetchedData = await data;
      dispatch(setProductArr(fetchedData));
      dispatch(setLoading(false));
    } catch (error) {
      console.log(error);
    }
  };

  const handleTick = (id) => {
    if (id) {
      const updatedData = pro.map((el) =>
        el.id === id ? { ...el, status: "Approved" } : el
      );
      dispatch(setProductArr(updatedData));
    }
  };

  const handleCrossClick = (el) => {
    setCrossSelect(el);
    setIsModalOpen(true);
  };

  const handleEditClick = (el) => {
    setEditSelect(el);
    setEditModal(true);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredProducts = pro.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className='border-2 border-gray-200 rounded-md p-6 flex flex-col gap-6'>
        <div className='flex justify-between items-center'>
          <div className='border-2 w-[35%] rounded-full p-2 flex items-center'>
            <input
              placeholder='Search...'
              onChange={handleSearch}
              value={searchTerm}
              className='w-[95%] outline-none'
            />
            <CiSearch className='text-2xl text-gray-500 font-bold' />
          </div>
          <div className='flex justify-between items-center gap-6'>
            <button className='border-2 border-green-600 text-green-700 font-medium  w-[90px] h-[35px]  rounded-full text-center'>
              Add Item
            </button>
            <div className='text-2xl text-green-700'>
              <IoPrintOutline />
            </div>
          </div>
        </div>

        <div className='border rounded-md w-full'>
          <table className='w-full'>
            <thead>
              <tr className=' text-zinc-500'>
                <th></th>
                <th className='p-4'>Product name</th>
                <th>Brand</th>
                <th className='text-start'>Price</th>
                <th className='text-start'>Quantity</th>
                <th className='text-start'>Total</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {load ? (
                <div>loading...</div>
              ) : (
                filteredProducts.map((el) => (
                  <tr
                    className='border border-gray-300 border-l-0 border-r-0 text-zinc-400 p-4'
                    key={el.id}
                  >
                    <td className='h-[90px] w-[90px]'>
                      <img className='h-full w-full' src={el.img} alt='' />
                    </td>
                    <td className='text-center p-2'>{el.name}</td>
                    <td className='text-center p-2'>{el.brand}</td>
                    <td className=' p-2'>
                      {el.updatePrice === 0 ? (
                        "$" + el.Price + " / 6* 1LB "
                      ) : (
                        <div className='flex gap-2'>
                          <div className='flex flex-col'>
                            ${el.updatePrice}{" "}
                            <span className='text-gray-400 line-through '>
                              ${el.Price}
                            </span>
                          </div>{" "}
                          + <p> / 6* 1LB </p>
                        </div>
                      )}
                    </td>
                    <td className='p-2'>
                      {el.updateQuant === 0 ? (
                        "$" + el.quantity + " / 6* 1LB "
                      ) : (
                        <div className='flex gap-2'>
                          <div className='flex flex-col'>
                            ${el.updateQuant}{" "}
                            <span className='text-gray-400 line-through '>
                              ${el.quantity}
                            </span>
                          </div>{" "}
                          + <p> / 6* 1LB </p>
                        </div>
                      )}
                    </td>
                    <td className=' p-2'>
                      {el.updateTol === 0 ? (
                        "$" + el.total
                      ) : (
                        <div className='flex flex-col'>
                          ${el.updateTol}{" "}
                          <span className='text-gray-400 line-through '>
                            ${el.total}
                          </span>
                        </div>
                      )}
                    </td>
                    <td>
                      <p
                        className={`${
                          el.status === "Approved"
                            ? "bg-green-500 rounded-full text-white font-medium p-1 text-center"
                            : ""
                        } ${
                          el.status === "Missing"
                            ? "bg-red-400 text-white rounded-full text-center p-1"
                            : ""
                        } ${
                          el.status === "Missing Urgent"
                            ? "bg-red-500 text-white rounded-full text-center p-1"
                            : ""
                        }`}
                      >
                        {el.status}
                      </p>
                    </td>
                    <td className='flex mt-6 items-center justify-center gap-2 p-2'>
                      <button
                        className={`${
                          el.status === "Approved" ? "text-green-500" : ""
                        }`}
                        onClick={() => handleTick(el.id)}
                      >
                        <FaCheck />
                      </button>
                      <button
                        className={`${
                          el.status === "Missing"
                            ? "text-red-400 font-bold"
                            : ""
                        } ${
                          el.status === "Missing Urgent"
                            ? "text-red-500 font-bold"
                            : ""
                        }`}
                        onClick={() => handleCrossClick(el)}
                      >
                        <RxCross2 />
                      </button>
                      <button onClick={() => handleEditClick(el)}>Edit</button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>

          <CrossPop
            isOpen={isModalOpen}
            onClose={toggle}
            crossselect={crossselect}
            getData={getData}
            pro={pro}
          />
          <EditPop
            isOpen={editModal}
            onClose={toggle2}
            editselect={editselect}
          />
        </div>
      </div>
    </>
  );
};
