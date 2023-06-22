import axios from 'axios';
import React, { useState, useEffect } from "react";
import Title from "@/components/ui/Title";
import Input from "@/components/form/Input";

const Category = () => {
  const [inputText, setInputText] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/categories`);
        setCategories(res?.data);
        // console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCategories();
  }, [])

  const handleCreate = async () => {
    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/categories`, { title: inputText });
      setCategories([...categories, res.data]);
      setInputText("");
    } catch (error) {
      console.log(error);
    }
  }

  const handleDelete = async (id) => {
    try {
      if(confirm("Are you sure you want to delete this category?"))
      {
        await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/categories/${id}`, );
        setCategories(categories.filter((cat) => cat._id !== id));
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="lg:p-8 flex-1 lg:mt-0 mt-5">
      <Title addClass="text-[40px]">Categories</Title>

      <div className="mt-5">
        <div className="flex items-center gap-4 flex-1 ">
          <Input
            placeholder="Add a new category"
            onChange={(e) => setInputText(e.target.value)}
            value={inputText}
          />
          <button
            className="btn-primary"
            onClick={handleCreate}
          >
            Add
          </button>
        </div>
        <div className="mt-10 max-h-[250px] overflow-auto pb-4 ">
          {categories.map((category) => (
            <div key={category._id} className="flex justify-between items-center">
              <b className="text-xl"> {category.title} </b>
              <button
                className="btn-primary !bg-danger mt-4"
                onClick={() => handleDelete(category._id)}
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
