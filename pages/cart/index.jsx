import React from "react";
import Image from "next/image";
import Title from "@/components/ui/Title";
import { useSelector, useDispatch } from "react-redux";
import { reset } from '@/redux/cartSlice';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="min-h-[calc(100vh_-_433px)]">
      <div className="flex justify-between items-center md:flex-row flex-col">
        <div className="min-h-[calc(100vh_-_433px)] flex items-center flex-1 p-10 overflow-x-auto w-full">
          <table className="w-full text-sm text-center text-gray-500 min-w-[1000px] ">
            <thead className="text-xs text-gray-400 uppercase bg-gray-700">
              <tr>
                <th className="py-3 px-6" scope="col">
                  PRODUCT
                </th>
                <th className="py-3 px-6" scope="col">
                  EXTRAS
                </th>
                <th className="py-3 px-6" scope="col">
                  PRICE
                </th>
                <th className="py-3 px-6" scope="col">
                  QUANTITY
                </th>
              </tr>
            </thead>
            <tbody>
              {cart.products.map((product) => (
                <tr className="bg-secondary border-gray-700 hover:bg-primary hover:text-white duration-300" key={product.id}>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-2 justify-center">
                    <Image
                      src="/images/f1.png"
                      width={60}
                      height={60}
                      alt="/"
                    />
                    <span>{ product.name }</span>
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap">
                    {
                      product.extras.map((item) => (
                        <span key={item.id}> {item.name} </span>
                      ))
                    }
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap">
                    ${product.price}
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap"> {product.quantity} </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="min-h-[calc(100vh_-_433px)] bg-secondary flex flex-col p-12 text-white md:w-auto w-full md:text-start text-center">
          <Title addClass="text-[40px] ">CART TOTAL</Title>
          <div>
            <b className="mt-4 inline-block">Sub Total:</b> ${cart.total}  <br />
            <b className="my-1 inline-block">Discount:</b> $0.00 <br />
            <b>Total:</b> ${cart.total}
          </div>
          <div>
            <button className="btn-primary mt-4 md:w-full w-1/2" onClick={() => dispatch(reset())}>
              CHECKOUT NOW!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
