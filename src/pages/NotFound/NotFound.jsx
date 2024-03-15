import { NavLink } from 'react-router-dom';
import css from './NotFound.module.css';
import { TbError404 } from 'react-icons/tb';
import { Helmet } from 'react-helmet-async';

export default function NotFound() {
  return (
    <div className={css.container}>
      <TbError404 size={150} />
      <p className={css.text}>Ops, not found page!</p>
      <NavLink to="/" className={css.link}>
        Go to the home page...
      </NavLink>
      <Helmet>
        <title>Not found</title>
      </Helmet>
    </div>
  );
}
