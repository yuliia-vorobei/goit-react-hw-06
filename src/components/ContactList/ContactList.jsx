import Contact from "../Contacts/Contacts";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";

const getVisibleContacts = (contacts, nameFilter) => {
  if (!nameFilter) return contacts;

  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(nameFilter.toLowerCase())
  );
};

export default function ContactList() {
  const selectContacts = useSelector((state) => state.contacts.items || []);
  const selectNameFilter = useSelector((state) => state.filters.name);
  const visibleContacts = getVisibleContacts(selectContacts, selectNameFilter);

  return (
    <ul className={css.list}>
      {visibleContacts.map((contact) => (
        <li key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
}
