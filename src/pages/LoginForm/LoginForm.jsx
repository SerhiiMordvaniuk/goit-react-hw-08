import { Field, Form, Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginThunk } from "../../redux/auth/authOperations";
import s from "./LoginForm.module.css";

const Login = () => {
  const initialValues = {
    password: "",
    email: "",
  };
  const dispatch = useDispatch();
  const handleSubmit = (values, options) => {
    dispatch(loginThunk(values));
    options.resetForm();
  };
  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <label className={s.label}>
            <span className={s.span}>E-mail</span>
            <Field name="email" className={s.input} />
          </label>
          <label className={s.label}>
            <span className={s.span}>Password</span>
            <Field type="password" name="password" className={s.input} />
          </label>
          <button type="submit" className={s.button}>
            Login
          </button>
          <p className={s.text}>
            New to Todos?
            <Link to="/register">
              <span className={s.link}> Register now</span>
            </Link>
          </p>
        </Form>
      </Formik>
    </>
  );
};

export default Login;
