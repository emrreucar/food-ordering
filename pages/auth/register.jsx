import { useFormik } from "formik";
import Title from "@/components/ui/Title";
import Input from "@/components/form/Input";
import { registerSchema } from "@/schema/register";
import { AiFillGithub } from "react-icons/ai";
import Link from "next/link";

const Register = () => {
  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    actions.resetForm();
  };

  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      onSubmit,
      validationSchema: registerSchema,
    });

  const inputs = [
    {
      id: 1,
      name: "fullName",
      type: "fullName",
      placeholder: "Your Full Name",
      value: values.fullName,
      errorMessage: errors.fullName,
      touched: touched.fullName,
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
      name: "password",
      type: "password",
      placeholder: "Your Password",
      value: values.password,
      errorMessage: errors.password,
      touched: touched.password,
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "Your Password Again",
      value: values.confirmPassword,
      errorMessage: errors.confirmPassword,
      touched: touched.confirmPassword,
    },
  ];
  return (
    <div className="container mx-auto max-w-[600px] ">
      <form
        className="flex flex-col items-center my-20 w-full"
        onSubmit={handleSubmit}
      >
        <Title addClass="text-[40px] mb-6 ">Register</Title>
        <div className="flex flex-col gap-y-2 w-full">
          {inputs.map((input) => (
            <Input
              key={input.id}
              {...input}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          ))}
          <div className="flex flex-col w-full gap-y-2">
            <button className="btn-primary uppercase">REGISTER</button>
            <span className="inline">
              <Link
                href="/auth/login"
                className="underline text-sm mt-2 opacity-80 hover:opacity-100 duration-100"
              >
                Do you have an account?
              </Link>
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
