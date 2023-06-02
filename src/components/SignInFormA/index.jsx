import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import styles from "./styles.module.scss";
import InputField from "components/InputFieldA";
import { Button, Divider } from "antd";
import { useDispatch } from "react-redux";
import { usersThunk } from "redux/thunks/usersThunk";
import PrimaryButton from "components/PrimaryButtonA";
import TextHover from "components/TextHoverA";

const SignInSchema = Yup.object().shape({
  email: Yup.string().required("Please provide email."),
  password: Yup.string().required("Please provide password."),
});

const SignInForm = () => {
  const dispatch = useDispatch();

  // Formik
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: SignInSchema,
      onSubmit: (values) => {
        console.log(values);
        dispatch(usersThunk.signIn(values));
      },
    });

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit}>
        <InputField
          label="Email"
          name="email"
          value={values.email}
          // error={errors.email}
          touched={touched.email}
          placeholder=" "
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <InputField
          label="Password"
          name="password"
          value={values.password}
          // error={errors.password}
          touched={touched.password}
          placeholder=" "
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <div className={styles.flex}>
          <PrimaryButton content={"sign in"} size="small" fontSize="small" />
          <TextHover content={"Forgot your password?"} />
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
