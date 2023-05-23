import React from 'react';

import styles from './styles.module.scss';
import SignInForm from 'components/SignInForm';

const Login = () => {
  return (
    <div className={styles.wrapper}>
      <SignInForm />
    </div>
  );
};

export default Login;
