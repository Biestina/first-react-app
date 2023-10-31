// https://www.youtube.com/watch?v=UvH70UkbyfE

import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { userSchema, schema } from "../validations/UserValidation";
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

const Form = () => {
  // const createUser = async (event: any) => {
  //   event.preventDefault();
  //   let formData = {
  //     name: event.target[0].value,
  //     email: event.target[1].value,
  //     password: event.target[2].value
  //   }
  //   console.log(formData);

  //   const isValid = await userSchema.isValid(formData);
  //   console.log(isValid);
  // };

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(schema),
  });
  // másik verzió
  const form = useForm<FormValues>();
  // const { register, formState } = form;
  // const {errors} = formState;
  // const { name, ref, onChange, onBlur } = register("fullName")

  const submitForm = (data: any) => {
    console.log(data);
  };

  const onSubmit = (data: FormValues) => {
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
      {/* <form onSubmit={createUser}>
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="submit" />
      </form> */}
      <h1>YouTube Form ({renderCount / 2})</h1>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        {/* destrukturálás nélkül: */}
        {/* <input type="text" placeholder='full name' name={name} ref={ref} onChange={onChange} onBlur={onBlur} /> */}
        <input
          type="text"
          placeholder="full name"
          id="fullName"
          {...register("fullName")}
        />
        <label htmlFor="fullName"></label>
        <p>{errors.fullName?.message}</p>

        <input type="email" placeholder="email" {...register("email")} />
        <p>{errors.email?.message}</p>
        <input type="text" placeholder="age" {...register("age")} />
        <p>{errors.age?.message}</p>
        <input
          type="password"
          placeholder="password"
          {...register("password")}
        />
        <p>{errors.password?.message}</p>
        <input
          type="password"
          placeholder="confirm password"
          {...register("confirmPassword")}
        />
        <p>{errors.confirmPassword?.message}</p>
        <input type="submit" id="submit" />
      </form>
      <DevTool control={control} />
    </>
  );
};

export default Form;
