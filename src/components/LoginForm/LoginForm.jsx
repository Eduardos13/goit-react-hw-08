import React from 'react';
import s from './LoginForm.module.css';
import { Field, Form, Formik } from 'formik';
import { Link, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginThunk } from '../../redux/auth/operations';
import { selectIsLogedIn } from '../../redux/auth/selectors';

const LoginForm = () => {
  const isLogedIn = useSelector(selectIsLogedIn);
  const initialValues = {
    email: '',
    password: '',
  };

  const disputch = useDispatch();

  const handleSubmit = (values, options) => {
    disputch(loginThunk(values));
    options.resetForm();
  };

  if (isLogedIn) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Field name="email" placeholder="Enter your email"></Field>
          <Field
            name="password"
            type="password"
            placeholder="Enter tour password"
          ></Field>
          <button type="submit">Login</button>

          <p>
            Don't have an account?<Link to="/register">Sign in</Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
