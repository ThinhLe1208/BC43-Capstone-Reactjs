import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import styles from './styles.module.scss';
import InputField from 'components/InputFieldA';
import { Button, Space, Spin } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { usersThunk } from 'redux/thunks/usersThunk';
import { storage } from 'utils/storage';
import { ACCESS_TOKEN, USER_LOGIN } from 'utils/constants/settingSystem';
import { notifications } from 'utils/notifications';
import { history } from 'utils/history';
import SocialButton from 'components/SocialButton';

const SignInSchema = Yup.object().shape({
  email: Yup.string().required('Please provide email.').email('Email is invalid'),
  password: Yup.string()
    .required('Please provide password.')
    .matches('^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$', 'Password is invalid'),
});

const SignInForm = () => {
  const { isLoadingUsers } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  // Formik
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: SignInSchema,
    onSubmit: async (values) => {
      try {
        const response = await dispatch(usersThunk.signIn(values)).unwrap();
        storage.setStorageJson(USER_LOGIN, response);
        storage.setStorageJson(ACCESS_TOKEN, response.accessToken);
        storage.setCookieJson(USER_LOGIN, response, 30);
        notifications.success('Sign in successfully.');
        history.push('/index');
      } catch (err) {
        notifications.error('Failed to sign in.');
      }
    },
  });

  const handleSocialLogin = async (user) => {
    try {
      const response = await dispatch(usersThunk.facebooklogin(user?._token?.accessToken)).unwrap();
      storage.setStorageJson(USER_LOGIN, response);
      storage.setStorageJson(ACCESS_TOKEN, response.accessToken);
      storage.setCookieJson(USER_LOGIN, response, 30);
      notifications.success('Sign in with Facebook successfully.');
      history.push('/index');
    } catch (err) {
      notifications.error('Failed to sign in with Facebook.');
    }
  };

  const handleSocialLoginFailure = (err) => {
    if (err) {
      notifications.error('Failed to sign in with Facebook.');
    }
  };

  return (
    <div
      className={styles.wrapper}
      style={{ paddingTop: '20px' }}
    >
      <form onSubmit={handleSubmit}>
        <div className={styles.input}>
          <InputField
            label='Email'
            name='email'
            value={values.email}
            error={errors.email}
            touched={touched.email}
            placeholder=' '
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        <div className={styles.input}>
          <InputField
            label='Password'
            name='password'
            value={values.password}
            error={errors.password}
            touched={touched.password}
            placeholder=' '
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        <div
          className={styles.flex}
          style={{ paddingTop: '20px' }}
        >
          <Space>
            <Button
              type='primary'
              htmlType='submit'
            >
              Sign In
            </Button>
            <SocialButton
              provider='facebook'
              appId='259894119932234'
              disabled={isLoadingUsers}
              type='primary'
              onLoginSuccess={handleSocialLogin}
              onLoginFailure={handleSocialLoginFailure}
            >
              <Space>
                Sign in with Facebook
                <Spin
                  spinning={isLoadingUsers}
                  style={{ color: '#fff' }}
                />
              </Space>
            </SocialButton>
          </Space>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
