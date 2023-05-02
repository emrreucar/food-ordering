import React, { useState } from "react";
import Title from "@/components/ui/Title";
import Input from "@/components/form/Input";
import { useFormik } from "formik";
import { footerSchema } from "@/schema/footer";
import { BsFillTrashFill } from "react-icons/bs";
import { FaFacebookF } from 'react-icons/fa';

const Footer = () => {

  // const [linkAddress, setLinkAddress] = useState("");
  // const [iconName, setIconName] = useState("");
  // const [icons, setIcons] = useState([])

  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    actions.resetForm();
  };

  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        location: "",
        email: "",
        phoneNumber: "",
        desc: "",
        day: "",
        time: "",
      },
      onSubmit,
      validationSchema: footerSchema,
    });
  const inputs = [
    {
      id: 1,
      name: "location",
      type: "text",
      placeholder: "Your Location",
      value: values.location,
      errorMessage: errors.location,
      touched: touched.location,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Your Email Address",
      value: values.email,
      errorMessage: errors.email,
      touched: touched.email,
    },
    {
      id: 3,
      name: "phoneNumber",
      type: "number",
      placeholder: "Your Phone Number",
      value: values.phoneNumber,
      errorMessage: errors.phoneNumber,
      touched: touched.phoneNumber,
    },
    {
      id: 4,
      name: "desc",
      type: "text",
      placeholder: "Your Description",
      value: values.desc,
      errorMessage: errors.desc,
      touched: touched.desc,
    },
    {
      id: 5,
      name: "day",
      type: "text",
      placeholder: "Update day",
      value: values.day,
      errorMessage: errors.day,
      touched: touched.day,
    },
    {
      id: 6,
      name: "time",
      type: "text",
      placeholder: "Update time",
      value: values.time,
      errorMessage: errors.time,
      touched: touched.time,
    },
  ];
  return (
    <form className="lg:p-8 flex-1" onSubmit={handleSubmit}>
      <Title addClass="text-[40px] mt-10 lg:mt-0 ">Footer Settings</Title>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 mt-4">
        {inputs.map((input) => (
          <Input
            key={input.id}
            {...input}
            onBlur={handleBlur}
            onChange={handleChange}
          />
        ))}
      </div>
      {/* <div className="mt-4 flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <Input placeholder="Link Address" value="https://" />
          <Input placeholder="Icon Name" value="< />" />
          <button className="btn-primary" type="button">Add</button>
        </div>
        <ul className="flex items-center gap-x-4">
          <li className="flex">
            <FaFacebookF />
            <button className="text-danger">
              <BsFillTrashFill className="text-2xl" />
            </button>
          </li>
          <li className="flex">
            <FaFacebookF />
            <button className="text-danger">
              <BsFillTrashFill className="text-2xl" />
            </button>
          </li>
          <li className="flex">
            <FaFacebookF />
            <button className="text-danger">
              <BsFillTrashFill className="text-2xl" />
            </button>
          </li>
        </ul>
      </div> */}
      <button className="btn-primary mt-4 ">Update</button>
    </form>
  );
};

export default Footer;
