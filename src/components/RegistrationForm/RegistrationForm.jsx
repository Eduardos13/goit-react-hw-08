import React from 'react';
import s from './RegistrationForm.module.css';
import { Field, Form, Formik } from 'formik';
import { Link } from 'react-router-dom';

const RegistrationForm = () => {
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const handleSubmit = (values, options) => {
    console.log(values);
    options.resetForm();
  };
  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Field name="name" placeholder="Enter your name"></Field>
          <Field name="email" placeholder="Enter your email"></Field>
          <Field
            name="password"
            type="password"
            placeholder="Enter tour password"
          ></Field>
          <button type="submit">Login</button>

          <p>
            Already have an account? <Link to="/login">Sign up</Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
