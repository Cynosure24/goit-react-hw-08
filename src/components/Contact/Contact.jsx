import css from './Contact.module.css';
import { FaUser } from 'react-icons/fa';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contactsOps';

export const Contact = ({ data: { name, number, id } }) => {
  const dispath = useDispatch();
  return (
    <div className={css.container}>
      <div className={css.values}>
        <p>
          <FaUser />
          <span className={css.info}>{name}</span>
        </p>
        <p>
          <BsFillTelephoneFill />
          <span className={css.info}>{number}</span>
        </p>
      </div>
      <button
        className={css.button}
        type="button"
        onClick={() => {
          dispath(deleteContact(id));
        }}
      >
        Delete
      </button>
    </div>
  );
};
