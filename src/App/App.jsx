import "./App.css";
import ContactForm from "../components/ContactForm/ContactForm";
// import { useEffect, useState } from "react";
import "./App.css";
import SearchBox from "../components/SearchBox/SearchBox";
import ContactList from "../components/ContactList/ContactList";

export default function App() {
  // const [contacts, setContacts] = useState(() => {
  //   const savedContacts = window.localStorage.getItem("saved-contacts");
  //   return savedContacts ? JSON.parse(savedContacts) : initialContacts;
  // });

  // useEffect(() => {
  //   window.localStorage.setItem("saved-contacts", JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}
