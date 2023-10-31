import * as yup from 'yup';

export const userSchema =  yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(4).max(10).required()
})

export const schema = yup.object().shape({
  fullName: yup.string().required("Your full name is required!"),
  email: yup.string().email().required("Email is required!"),
  age: yup.number().positive().integer().min(18).required("You must be at least 18 years old!"),
  password: yup.string().min(4).max(20).required(),
  // confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Passwords don't match!").required(),
  confirmPassword: yup.string().oneOf([yup.ref("password")], "Passwords don't match!").required(),
})