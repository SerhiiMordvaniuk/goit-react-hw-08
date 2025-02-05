import { Formik, Form, Field } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { registerThunk } from "../../redux/auth/Operations";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/Selectors";
import s from "./RegistrationForm.module.css";

const Register = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  const navigate = useNavigate();

  const handleSubmit = (values, options) => {
    dispatch(registerThunk(values)).unwrap().then(navigate("/"));

    options.resetForm();
  };

  return (
    <div className="container">
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <label className={s.label}>
            <span className={s.span}>Name</span>
            <Field name="name" className={s.input} />
          </label>
          <label className={s.label}>
            <span className={s.span}>E-mail</span>
            <Field name="email" className={s.input} />
          </label>
          <label className={s.label}>
            <span className={s.span}>Password</span>
            <Field type="password" name="password" className={s.input} />
          </label>
          <button type="submit" className={s.button}>
            Register
          </button>
          <p className={s.text}>
            Have an account?{" "}
            <Link to="/login">
              <span className={s.link}>Login</span>
            </Link>
          </p>
          {isLoggedIn && (
            <Link to="/">
              <s>Home</s>
            </Link>
          )}
        </Form>
      </Formik>
    </div>
  );
};

export default Register;
