import css from './LoginForm.module.css';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useId } from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { logIn } from '../../redux/auth/authOps';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const inputEmailId = useId();
  const inputPasswordId = useId();
  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .email()
      .matches('^(?!.*@[^,]*,)', 'Invalid email')
      .required('Email is required!'),
    password: Yup.string()
      .required('No password provided!')
      .min(8, 'Password is too short.')
      .matches('[a-zA-Z]', 'Latin letters only.'),
  });
  return (
    <div>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={(values, action) => {
          dispatch(logIn(values));
          action.resetForm();
        }}
        validationSchema={loginSchema}
      >
        <Form className={css.wrapper}>
          <label htmlFor={inputEmailId} className={css.label}>
            Email
          </label>
          <Field
            type="email"
            name="email"
            id={inputEmailId}
            className={css.field}
          ></Field>
          <ErrorMessage name="email" component="span" className={css.error} />
          <label htmlFor={inputPasswordId} className={css.label}>
            Password
          </label>
          <Field
            type="password"
            name="password"
            id={inputPasswordId}
            className={css.field}
          ></Field>
          <ErrorMessage
            name="password"
            component="span"
            className={css.error}
          />
          <button className={css.button} type="submit">
            Login
          </button>
        </Form>
      </Formik>
    </div>
  );
};
