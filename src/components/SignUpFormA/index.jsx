import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import styles from "./styles.module.scss";
import InputField from "components/InputFieldA";
import { Button, Radio } from "antd";
import { useDispatch } from "react-redux";
import { usersThunk } from "redux/thunks/usersThunk";
import { notifications } from "utils/notifications";
import { history } from "utils/history";

const SignUpSchema = Yup.object().shape({
  email: Yup.string()
    .required("Please provide email.")
    .email("Email is invalid"),
  password: Yup.string()
    .required("Please provide password.")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
  name: Yup.string().required("Please provide name.").min(6).max(24),
  phone: Yup.string().required("Please provide phone.").max(10),
});

const SignUpForm = () => {
  const dispatch = useDispatch();

  // Formik
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
      name: "",
      gender: true,
      phone: "",
    },
    validationSchema: SignUpSchema,
    onSubmit: async (values) => {
      try {
        await dispatch(usersThunk.signUp(values)).unwrap();
        notifications.success("Sign up successfully.");
        history.push("/login");
      } catch (err) {
        notifications.error("Failed to sign up.");
      }
    },
  });

  const handleChangeGender = (e) => {
    setFieldValue("gender", e.target.value);
  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit}>
        <div className={styles.input}>
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
        </div>
        <div className={styles.input}>
          <InputField
            label="Password"
            name="password"
            type="password"
            value={values.password}
            error={errors.password}
            touched={touched.password}
            placeholder=" "
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        <div className={styles.input}>
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
        </div>
        <div className={styles.input}>
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
        </div>
        <div className={styles.input}>
          <Radio.Group onChange={handleChangeGender} value={values.gender}>
            <Radio value={true}>Male</Radio>
            <Radio value={false}>Female</Radio>
          </Radio.Group>
        </div>
        <Button type="primary" htmlType="submit">
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default SignUpForm;
