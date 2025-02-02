import { Formik, Form, Field } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { registerThunk } from "../../redux/auth/authOperations";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/authSelectors";

const Register = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  console.log(isLoggedIn);
  console.log(user);

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
      {isLoggedIn && <Link to="/">Home</Link>}
    </>
  );
};

export default Register;
