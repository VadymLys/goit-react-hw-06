import css from "../Contact/Contact.module.css";
import { FaUserLarge } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <div className={css.contactContainer}>
      <li>
        <p className={css.userdata}>
          <FaUserLarge />
          {contact.name}
        </p>
        <p className={css.userdata}>
          <FaPhoneAlt />
          {contact.number}
        </p>
      </li>
      <button className={css.btn} type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
