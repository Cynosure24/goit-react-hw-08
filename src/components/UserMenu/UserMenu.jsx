import { useDispatch, useSelector } from 'react-redux';
import css from './UserMenu.module.css';
import { selectUser } from '../../redux/selectors';
import { logOut } from '../../redux/auth/authOps';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name}</p>
      <button
        type="button"
        onClick={() => dispatch(logOut())}
        className={css.button}
      >
        Logout
      </button>
    </div>
  );
};
