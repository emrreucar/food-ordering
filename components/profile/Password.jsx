import React from 'react';
import Title from '@/components/ui/Title';
import Input from '@/components/form/Input';
import { useFormik } from "formik";
import { newPasswordSchema } from "@/schema/newPassword";

const Password = () => {
    const onSubmit = async (values, actions) => {
        await new Promise((resolve) => setTimeout(resolve, 3000));
        actions.resetForm();
      };
    
      const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
        useFormik({
          initialValues: {
            password: "",
            confirmPassword: "",
            
          },
          onSubmit,
          validationSchema: newPasswordSchema,
        });
      const inputs = [
        {
          id: 1,
          name: "password",
          type: "password",
          placeholder: "Your Password",
          value: values.password,
          errorMessage: errors.password,
          touched: touched.password,
        },
        {
          id: 2,
          name: "confirmPassword",
          type: "password",
          placeholder: "Your password again",
          value: values.confirmPassword,
          errorMessage: errors.confirmPassword,
          touched: touched.confirmPassword,
        }
      ];
  return (
    <form className="lg:p-8 flex-1" onSubmit={handleSubmit}>
        <Title addClass="text-[40px] mt-10 lg:mt-0 ">Password</Title>
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
        <button className="btn-primary mt-4" type='submit'>Update</button>
      </form>
  )
}

export default Password