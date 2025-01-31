import { Formik, Form, Field } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { registerThunk } from "../../redux/auth/authOperations";

const Register = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = (values, options) => {
    console.log(values);
    console.log(initialValues);

    dispatch(registerThunk(values));
    options.resetForm();
  };

  return (
    <>
      <p>register</p>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <label>
            <span>Name</span>
            <Field name="name" />
          </label>
          <label>
            <span>E-mail</span>
            <Field name="email" />
          </label>
          <label>
            <span>Password</span>
            <Field type="password" name="password" />
          </label>
          <button type="submit">Register</button>
        </Form>
      </Formik>
      <p>
        Have an account? <Link to="/login">Login</Link>
      </p>
    </>
  );
};

export default Register;
