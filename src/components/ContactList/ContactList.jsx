import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "../ContactList/ContactList.module.css";
import { selectNameFilter } from "../../redux/filtersSlice";
import { selectContact } from "../../redux/contactsSlice";

const ContactList = () => {
  const allContacts = useSelector(selectContact);
  const nameFilter = useSelector(selectNameFilter);

  const filteredContacts = allContacts.filter((contact) =>
    contact.name.toLowerCase().includes(nameFilter.toLowerCase())
  );

  return (
    <ul className={css.contactList}>
      {filteredContacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;
