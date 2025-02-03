import s from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useDispatch, useSelector } from "react-redux";

import Loader from "../Loader/Loader";
import { selectFilteredContacts } from "../../redux/contacts/contactsSlice";
import {
  selectError,
  selectLoading,
} from "../../redux/contacts/contactsSelectors";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/contactsOperations";

const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contactList = useSelector(selectFilteredContacts);

  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);

  return (
    <div>
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
    </div>
  );
};

export default ContactList;
