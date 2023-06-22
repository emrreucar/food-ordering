import axios from "axios";
import { useFormik } from "formik";
import Title from "@/components/ui/Title";
import Input from "@/components/form/Input";
import { loginSchema } from "@/schema/login";
import { AiFillGithub } from "react-icons/ai";
import Link from "next/link";
import { useEffect, useState } from "react";

import { getSession, useSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";

const Login = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [currentUser, setCurrentUser] = useState();

  const onSubmit = async (values, actions) => {
    const { email, password } = values;
    let options = { redirect: false, email, password };
    try {
      const res = await signIn("credentials", options);
      actions.resetForm();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users`);
        setCurrentUser(
          res.data?.find((user) => user.email === session?.user?.email)
        );
        session && router.push("/profile/" + currentUser?._id);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, [session, router, currentUser]);

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
            <button className="btn-primary uppercase" type="submit">
              Login
            </button>
            <button
              className="btn-primary !bg-secondary"
              type="button"
              onClick={() => signIn("github")}
            >
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

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });

  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users`);
  const user = res.data?.find((user) => user.email === session?.user.email);

  if (session && user) {
    return {
      redirect: {
        destination: "/profile/" + user._id,
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

export default Login;
