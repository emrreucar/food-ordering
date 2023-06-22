import React, { useState } from "react";
import Title from "../ui/Title";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";

const AddProduct = ({ setIsProductModal }) => {
  const [file, setFile] = useState();
  const [imageSrc, setImageSrc] = useState();

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("");
  const [prices, setPrices] = useState([]);

  const [extra, setExtra] = useState("");
  const [extraOptions, setExtraOptions] = useState([]);

  

  const handleOnChange = (changeEvent) => {
    const reader = new FileReader();

    reader.onload = function (onLoadEvent) {
      setImageSrc(onLoadEvent.target.result);
      setFile(changeEvent.target.files[0]);
    };

    reader.readAsDataURL(changeEvent.target.files[0]);
  };

  const handleExtra = () => {
    if(extra){
      if(extra.text && extra.price){
        setExtraOptions((prev) => [...prev, extra]);
      }
    }
  }

  const handleCreate = async () => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "food-ordering");

    try {
      const uploadRes = await axios.post("https://api.cloudinary.com/v1_1/dlg26ts1r/image/upload", data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="absolute top-0 left-0 w-screen h-screen bg-black/70 z-50">
      <div className="w-full h-full grid place-content-center">
        <div className="md:w-[600px] w-[370px] duration-300 bg-white border-2 p-10 relative rounded-3xl">
          <Title addClass="text-[40px] text-center">Add a new Product</Title>

          <div className="flex flex-col text-sm">
            <span className="font-semibold mb-1">Choose an image</span>
            <label className="flex gap-2 items-center">
              <input
                type="file"
                onChange={handleOnChange}
                className="hidden"
              />
              <button className="btn-primary !rounded-none !bg-blue-600 pointer-events-none">
                Choose an Image
              </button>
              {imageSrc && (
                <div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={imageSrc}
                    alt=""
                    className="w-12 h-12 rounded-full"
                  />
                </div>
              )}
            </label>
          </div>

          <div className="flex flex-col text-sm mt-1">
            <span className="font-semibold mb-1">Title</span>
            <input
              type="text"
              placeholder="Write a title..."
              className="border h-8 text-sm px-2 outline-none"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="flex flex-col text-sm mt-1">
            <span className="font-semibold mb-1">Description</span>
            <textarea
              placeholder="Write a description..."
              className="border h-8 text-sm px-2 outline-none"
              onChange={(e)=> setDesc(e.target.value)}
            />
          </div>

          <div className="flex flex-col text-sm mt-1">
            <span className="font-semibold mb-1">Select Category</span>
            <select className="border h-8 text-sm px-2 outline-none">
              <option value="category1">Category1</option>
              <option value="category2">Category2</option>
              <option value="category3">Category3</option>
              <option value="category4">Category4</option>
            </select>
          </div>

          <div className="flex flex-col text-sm mt-1">
            <div className="mt-5">
              <span className="font-semibold mb-1">Prices</span>
              <div className="flex gap-4">
                <div>
                  <input
                    placeholder="small"
                    type="number"
                    className="border-b-2 p-1 text-sm px-1 outline-none"
                  />
                </div>
                <div>
                  <input
                    placeholder="medium"
                    type="number"
                    className="border-b-2 p-1 text-sm px-1 outline-none"
                  />
                </div>
                <div>
                  <input
                    placeholder="large"
                    type="number"
                    className="border-b-2 p-1 text-sm px-1 outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="mt-5">
              <span className="font-semibold mb-1">Extra</span>
              <div className="flex gap-4">
                <div>
                  <input
                    placeholder="Item"
                    type="text"
                    className="border-b-2 p-1 text-sm px-1 outline-none"
                    name="text"
                    onChange={(e) => setExtra({...extra, [e.target.name]: e.target.value})}
                  />
                </div>
                <div>
                  <input
                    placeholder="Price"
                    type="text"
                    className="border-b-2 p-1 text-sm px-1 outline-none"
                    name="price"
                    onChange={(e) => setPrices({...extra, [e.target.name]: e.target.value})}
                  />
                </div>
                <button className="btn-primary ml-auto" onClick={handleExtra}>Add</button>
              </div>
              <div className="mt-2">
                {extraOptions.map((item, index) => (
                  <span key={index} className="border inline-block border-orange-500 text-orange-500 p-1 text-xs rounded-xl">
                  {item.text}
                </span>
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <button className="btn-primary !bg-success ml-auto" onClick={handleCreate}>Create</button>
          </div>
          <div>
            {/* close icon */}
            <button
              onClick={() => setIsProductModal(false)}
              className="absolute top-5 right-5"
            >
              <AiOutlineClose
                className="hover:text-primary duration-300"
                size={30}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
