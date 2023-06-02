import React from "react";

import styles from "./styles.module.scss";
import SignInForm from "components/SignInFormA";
import PrimaryButton from "components/PrimaryButtonA";
import { Footer } from "antd/es/layout/layout";
import TextHover from "components/TextHoverA";
import Container from "components/Container";

const Login = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.title}>Already Registered?</div>
        <div className={styles.content}>
          <div className={styles.changeSignUp}>
            <h1>New Customer</h1>
            <p>
              By creating an account you will be able to shop faster, be up to
              date on an order's status, and keep track of the orders you have
              previously made.
            </p>
            <PrimaryButton
              className={styles.btn}
              content={"Create Account"}
              size={"small"}
              fontSize={"small"}
            />
          </div>
          <div className={styles.signIn}>
            <h1>Login</h1>
            <p>If you have an account, please log in.</p>
            <SignInForm />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Login;
