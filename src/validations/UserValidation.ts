import { useState } from "react";
import * as yup from "yup";

// const [showReassword, setShowRepassword] = useState(null);

export const userSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(4).max(10).required(),
});


let rePassword: yup.AnyObject | null;
let action = "Register";
if (action === "Register") {
  rePassword = {
    confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords don't match!")
    .required(),
  };
} else {
  rePassword = null;
}

export const schema = yup.object().shape({
  // nem működik a regex
  fullName: yup.string().matches(/^(.+[ ].+)$/, "invalid name!").required("Your full name is required!"),
  email: yup.string().email().required("Email is required!"),
  age: yup
    .number()
    .positive()
    .integer()
    .min(18)
    .required("You must be at least 18 years old!"),
    password: yup.string().min(4).max(20).required(),
    ...rePassword,
  // confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Passwords don't match!").required(),
}); // eeeeeeez nem lesz jó