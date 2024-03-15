import { NavLink } from 'react-router-dom';
import css from './Logo.module.css';

export const Logo = () => {
  return (
    <NavLink to="/">
      <p className={css.logo}>GUIDE</p>
    </NavLink>
  );
};
