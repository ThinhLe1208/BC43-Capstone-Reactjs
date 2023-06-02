import React from "react";

import styles from "./styles.module.scss";
import SignUpForm from "components/SignUpFormA";

const Register = () => {
  return (
    <div className={styles.wrapper}>
      <h1>Create Account</h1>
      <div className={styles.container}>
        <SignUpForm />
      </div>
    </div>
  );
};

export default Register;
