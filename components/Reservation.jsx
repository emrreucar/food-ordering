import React from "react";
import Input from "./form/Input";
import Title from "./ui/Title";
import { useFormik } from "formik";
import { reservationSchema } from "@/schema/reservation";

const Reservation = () => {
  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    actions.resetForm();
  };

  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        fullName: "",
        phoneNumber: "",
        email: "",
        persons: "",
        date: "",
      },
      onSubmit,
      validationSchema: reservationSchema,
    });

  const inputs = [
    {
      id: 1,
      name: "fullName",
      type: "text",
      placeholder: "Your Full Name",
      value: values.fullName,
      errorMessage: errors.fullName,
      touched: touched.fullName,
    },
    {
      id: 2,
      name: "phoneNumber",
      type: "number",
      placeholder: "Your Phone Number",
      value: values.phoneNumber,
      errorMessage: errors.phoneNumber,
      touched: touched.phoneNumber,
    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "Your Email Address",
      value: values.email,
      errorMessage: errors.email,
      touched: touched.email,
    },
    {
      id: 4,
      name: "persons",
      type: "number",
      placeholder: "How Many Persons",
      value: values.persons,
      errorMessage: errors.number,
      touched: touched.number,
    },
    {
      id: 5,
      name: "date",
      type: "datetime-local",
      placeholder: "",
      value: values.date,
      errorMessage: errors.date,
      touched: touched.date,
    },
  ];

  return (
    <div className="container mx-auto py-12">
      <div className="flex flex-wrap sm:justify-between justify-start items-center gap-x-10">
        <div className="flex-1 xl:py-0 py-8">
          <Title addClass="text-4xl mb-10">Book A Table</Title>
          <form className="flex flex-col gap-y-4" onSubmit={handleSubmit}>
            {inputs.map((input) => (
              <Input
                key={input.id}
                {...input}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            ))}
            <button className="btn-primary mt-4" type="submit">
              Book Now
            </button>
          </form>
        </div>
        <div className="flex-1">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d406435.3050971009!2d28.066292248194866!3d37.26488601531567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bf6ebe9b7f7cbf%3A0xceb1c01427a043ec!2zTXXEn2xhIE1lcmtleiwgTXXEn2xh!5e0!3m2!1str!2str!4v1682801010189!5m2!1str!2str"
            width="600"
            height="450"
            style={{ borderRadius: "20px" }}
            allowFullScreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="md:pr-0 pr-8"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
