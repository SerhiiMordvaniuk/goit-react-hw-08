import s from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useDispatch, useSelector } from "react-redux";

import { selectFilteredContacts } from "../../redux/contacts/Slice";
import { selectError, selectLoading } from "../../redux/contacts/Selectors";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/Operations";
import Loader from "../Loader/Loader";

const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contactList = useSelector(selectFilteredContacts);

  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);

  return (
    <>
      {loading && <Loader />}
      {error && <p>Something went wrong....</p>}
      {
        <ul className={s.list}>
          {contactList.map((item) => {
            return (
              <li key={item.id}>
                <Contact id={item.id} name={item.name} number={item.number} />
              </li>
            );
          })}
        </ul>
      }
    </>
  );
};

export default ContactList;
