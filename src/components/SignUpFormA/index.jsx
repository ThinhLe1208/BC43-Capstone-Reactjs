import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import styles from "./styles.module.scss";
import InputField from "components/InputFieldA";
import { Button, Divider } from "antd";
import { useDispatch } from "react-redux";
import { usersThunk } from "redux/thunks/usersThunk";
import PrimaryButton from "components/PrimaryButtonA";

const SignUpSchema = Yup.object().shape({
  email: Yup.string().required("Please provide email."),
  password: Yup.string().required("Please provide password."),
  name: Yup.string().required("Please provide name."),
  phone: Yup.string().required("Please provide phone."),
});

const SignUpForm = () => {
  const dispatch = useDispatch();

  // Formik
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
        name: "",
        gender: true,
        phone: "",
      },
      validationSchema: SignUpSchema,
      onSubmit: (values) => {
        console.log(values);
        dispatch(usersThunk.signUp(values));
      },
    });

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit}>
        <InputField
          label="Email"
          name="email"
          value={values.email}
          error={errors.email}
          touched={touched.email}
          placeholder=" "
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <InputField
          label="Password"
          name="password"
          value={values.password}
          error={errors.password}
          touched={touched.password}
          placeholder=" "
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <InputField
          label="Name"
          name="name"
          value={values.name}
          error={errors.name}
          touched={touched.name}
          placeholder=" "
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <InputField
          label="Phone"
          name="phone"
          value={values.phone}
          error={errors.phone}
          touched={touched.phone}
          placeholder=" "
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <PrimaryButton content={"SignUp"} size={"small"} fontSize={"small"} />
      </form>
    </div>
  );
};

export default SignUpForm;
