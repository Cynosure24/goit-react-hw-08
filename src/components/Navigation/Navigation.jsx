import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import { selectIsLoggedIn } from '../../redux/selectors';
import { useSelector } from 'react-redux';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={css.wrapper}>
      <NavLink to="/" className={css.link}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" className={css.link}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
