import React from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearschBox from "../../components/SearchBox/SearschBox";
import ContactList from "../../components/ContactList/ContactList";

const Contacts = () => {
  return (
    <div>
      {" "}
      <ContactForm />
      <SearschBox />
      <ContactList />
    </div>
  );
};

export default Contacts;
