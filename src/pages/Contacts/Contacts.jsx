import React from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearschBox from "../../components/SearchBox/SearschBox";
import ContactList from "../../components/ContactList/ContactList";
import s from "./Contacts.module.css";

const Contacts = () => {
  return (
    <main className="container">
      <div className={s.contacts}>
        {" "}
        <ContactForm />
        <SearschBox />
      </div>
      <div className={s.list}>
        <ContactList />
      </div>
    </main>
  );
};

export default Contacts;
