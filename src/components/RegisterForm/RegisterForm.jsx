import css from './RegisterForm.module.css';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useId } from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { register } from '../../redux/auth/authOps';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const inputNameId = useId();
  const inputEmailId = useId();
  const inputPasswordId = useId();
  const registerSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Name must be at least 2 symbols')
      .max(20, 'Max length is 20')
      .required('Name is required!')
      .matches('^[a-zA-Z]+$', 'Only alphabet symbols'),
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
          name: '',
          email: '',
          password: '',
        }}
        onSubmit={(values, action) => {
          dispatch(register(values));
          action.resetForm();
        }}
        validationSchema={registerSchema}
      >
        <Form className={css.wrapper}>
          <label htmlFor={inputNameId} className={css.label}>
            Name
          </label>
          <Field
            type="text"
            name="name"
            id={inputNameId}
            className={css.field}
          ></Field>
          <ErrorMessage name="name" component="span" className={css.error} />
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
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
};
