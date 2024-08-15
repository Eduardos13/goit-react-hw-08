import React from 'react';
import s from './LoginForm.module.css';
import { Field, Form, Formik } from 'formik';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginThunk } from '../../redux/auth/operations';

const LoginForm = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const disputch = useDispatch();

  const handleSubmit = (values, options) => {
    disputch(loginThunk(values));
    options.resetForm();
  };

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
