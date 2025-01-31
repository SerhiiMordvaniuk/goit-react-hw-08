import { Field, Form, Formik } from "formik";
import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const initialValues = {
    password: "",
    email: "",
  };

  const handleSubmit = (values, options) => {
    console.log(values);
    options.resetForm();
  };
  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <label>
            <span>E-mail</span>
            <Field name="email" />
          </label>
          <label>
            <span>Password</span>
            <Field type="password" name="password" />
          </label>
          <button type="submit">Login</button>
        </Form>
      </Formik>
      <p>
        New to Todos?<Link to="/register">Register now</Link>
      </p>
    </>
  );
};

export default Login;
