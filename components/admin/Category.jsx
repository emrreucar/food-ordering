import React, { useState } from "react";
import Title from "@/components/ui/Title";
import Input from "@/components/form/Input";

const Category = () => {
  const [inputText, setInputText] = useState("");
  const [categories, setCategories] = useState([]);
  return (
    <div className="lg:p-8 flex-1 lg:mt-0 mt-5">
      <Title addClass="text-[40px]">Categories</Title>

      <div className="mt-5">
        <div className="flex items-center gap-4 flex-1">
          <Input
            placeholder="Add a new category"
            onChange={(e) => setInputText(e.target.value)}
            value={inputText}
          />
          <button
            className="btn-primary"
            onClick={() => {
              setCategories([...categories, inputText]);
              setInputText("");
            }}
          >
            Add
          </button>
        </div>
        <div className="mt-10">
          {categories.map((category, index) => (
            <div key={index} className="flex justify-between items-center">
              <b className="text-xl"> {category} </b>
              <button
                className="btn-primary !bg-danger mt-4"
                onClick={() => {
                  setCategories(categories.filter((cat) => cat !== category));
                }}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
