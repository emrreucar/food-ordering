import { useFormik } from "formik";
import Title from "@/components/ui/Title";
import Input from "@/components/form/Input";
import { loginSchema } from "@/schema/login";
import { AiFillGithub } from "react-icons/ai";
import Link from "next/link";

import { useSession, signIn } from "next-auth/react";

const Login = () => {

  const { data: session } = useSession();
  
  const onSubmit = async (values, actions) => {
    const { email, password } = values;
    let options = { redirect: false, email, password };
    const res = await signIn("credentials", options);
    actions.resetForm();
  };

  console.log(session);
  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      onSubmit,
      validationSchema: loginSchema,
    });

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Your Email Address",
      value: values.email,
      errorMessage: errors.email,
      touched: touched.email,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Your Password",
      value: values.password,
      errorMessage: errors.password,
      touched: touched.password,
    },
  ];
  return (
    <div className="container mx-auto max-w-[600px] ">
      <form
        className="flex flex-col items-center my-20 w-full"
        onSubmit={handleSubmit}
      >
        <Title addClass="text-[40px] mb-6 ">Login</Title>
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
            <button className="btn-primary uppercase" type="submit">Login</button>
            <button className="btn-primary !bg-secondary" type="button" onClick={()=> signIn("github")}>
              <div className="flex items-center justify-center">
                <AiFillGithub className="mr-2" /> GITHUB
              </div>
            </button>
            <span className="inline">
              <Link
                href="/auth/register"
                className="underline text-sm mt-2 opacity-80 hover:opacity-100 duration-100"
              >
                Do you no have an account?
              </Link>
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
