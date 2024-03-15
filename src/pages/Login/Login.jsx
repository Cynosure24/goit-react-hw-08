import { Helmet } from 'react-helmet-async';
import { LoginForm } from '../../components/LoginForm/LoginForm';
import css from './Login.module.css';

export default function Login() {
  return (
    <div className={css.container}>
      <LoginForm />
      <Helmet>
        <title>Login</title>
      </Helmet>
    </div>
  );
}
