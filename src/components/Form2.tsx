// https://www.youtube.com/watch?v=UvH70UkbyfE

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// import { userSchema, schema } from "../validations/UserValidation";
// https://www.youtube.com/watch?v=yvzU12E82M0&list=PLC3y8-rFHvwjmgBr1327BA5bVXoQH-w5s&index=5
import { DevTool } from "@hookform/devtools";

let renderCount = 0;

type FormValues = {
  fullName: string;
  email: string;
  age: number;
  password: string;
  confirmPassword: string;
};

// type Props = {
//   isLogin?: boolean;
// };

const Form = () => {
  const [isLogin, setIsLogin] = useState(true);

  const schema = yup.object().shape({
    email: yup.string().email().required("Email is required!"),
    password: yup.string().min(4).max(20).required(),
    ...(isLogin
      ? {}
      : {
          fullName: yup.string().required("Your full name is required!"),
          age: yup
            .number()
            .positive()
            .integer()
            .min(18)
            .required("You must be at least 18 years old!"),
          confirmPassword: yup
            .string()
            .oneOf([yup.ref("password")], "Passwords don't match!")
            .required(),
        }),
  });

  // if (!isLogin) {
  //   rePassword = {
  //     confirmPassword: yup
  //     .string()
  //     .oneOf([yup.ref("password")], "Passwords don't match!")
  //     .required(),
  //   };
  // } else {
  //   rePassword = null;
  // }

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    // const onSubmit = (data: FormValues) => {
    console.log("Form submitted", data);
    fetch("https://dummyjson.com/users/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then(console.log);
  };

  renderCount++;
  return (
    <>
      <h4>Rerender count: ({renderCount / 2})</h4>
      <h1>{isLogin ? "Login" : "Register"}</h1>
      <span>
        {isLogin ? "Don't have an account yet?" : "Already have an account?"}
      </span>
      <button
        type="button"
        onClick={() => setIsLogin(isLogin ? false : true)}
      >
        {isLogin ? "Sign up for free" : "Log in"}
      </button>

      {/* <button type="button" onClick={() => setIsLogin(!isLogin)}>
         Sign up for free {isLogin ? "Register" : "Login"}
      </button> */}

      <form
        className="shadow p-5 m-5"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        {!isLogin && (
          <>
            <input
              type="text"
              placeholder="full name"
              id="fullName"
              {...register("fullName")}
            />
            <p>{errors.fullName?.message}</p>
          </>
        )}

        <input type="email" placeholder="email" {...register("email")} />
        <p>{errors.email?.message}</p>
        {!isLogin && (
          <>
            <input type="text" placeholder="age" {...register("age")} />
            <p>{errors.age?.message}</p>
          </>
        )}
        <input
          type="password"
          placeholder="password"
          {...register("password")}
        />
        <p>{errors.password?.message}</p>

        {!isLogin && (
          <>
            <input
              type="password"
              placeholder="confirm password"
              {...register("confirmPassword")}
            />
            <p>{errors.confirmPassword?.message}</p>
          </>
        )}
        <button type="submit">{isLogin ? "Login" : "Register"}</button>
      </form>
      <DevTool control={control} />
    </>
  );
};

export default Form;
