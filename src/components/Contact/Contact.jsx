import s from "./Contact.module.css";
import { FaUserAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/contactsOperations";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleClick = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={s.item}>
      <div className={s.contacts}>
        <div className={s.contact}>
          <FaUserAlt size="15" color="var(--second-text-color)" />
          <p>{name}</p>
        </div>
        <div className={s.number}>
          <FaPhoneAlt size="15" color="var(--second-text-color)" />
          <p>{number}</p>
        </div>
      </div>
      <button
        className={s.btn}
        onClick={() => {
          handleClick(id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
