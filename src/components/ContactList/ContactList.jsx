import s from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";

import Loader from "../Loader/Loader";
import { selectFilteredContacts } from "../../redux/contacts/contactsSlice";
import {
  selectError,
  selectLoading,
} from "../../redux/contacts/contactsSelectors";

const ContactList = () => {
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
