import { useId } from "react";
import s from "./ContactForm.module.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";

const initialValues = {
  name: "",
  number: "",
};

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Please enter at least 3 characters")
    .max(20, "Enter maximum 20 characters")
    .required("This field is required"),
  number: Yup.string()
    .min(3, "Please enter at least 3 characters")
    .max(20, "Enter maximum 20 characters")
    .required("This field is required"),
});

const ContactForm = () => {
  const nameId = useId();
  const numberId = useId();

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    actions.resetForm();

    dispatch(addContact({ name: values.name, number: values.number }));
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className={s.form}>
          <div>
            <label htmlFor={nameId} className={s.label}>
              <span className={s.span}>Name</span>
              <Field type="text" name="name" className={s.input} id={nameId} />
              <ErrorMessage name="name" component="span" className={s.error} />
            </label>
          </div>
          <div>
            <label htmlFor={numberId} className={s.label}>
              <span className={s.span}>Number</span>
              <Field
                type="text"
                name="number"
                className={s.input}
                id={numberId}
              />
              <ErrorMessage
                name="number"
                component="span"
                className={s.error}
              />
            </label>
          </div>
          <button type="submit" className={s.button}>
            Add contact
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default ContactForm;
