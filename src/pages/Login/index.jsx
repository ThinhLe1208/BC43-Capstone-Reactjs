import React from 'react';

import styles from './styles.module.scss';
import SignInForm from 'components/SignInFormA';
import Container from 'components/Container';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.title}>Already Registered?</div>
        <div className={styles.content}>
          <div className={styles.changeSignUp}>
            <h1 style={{ marginBottom: '14px' }}>New Customer</h1>
            <p style={{ marginBottom: '14px' }}>
              By creating an account you will be able to shop faster, be up to date on an order's status, and keep track
              of the orders you have previously made.
            </p>
            <Button
              type='primary'
              onClick={() => navigate('/register')}
            >
              Create Account
            </Button>
          </div>
          <div className={styles.signIn}>
            <h1 style={{ marginBottom: '14px' }}>Login</h1>
            <p>If you have an account, please log in.</p>
            <SignInForm />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Login;
