import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Button from 'ui/Button';
import { InputText } from 'ui/Inputs';
import { LockIcon, UserIcon } from 'ui/IconsSvg';
import { SignInRequestModel } from 'models/api/api';
import { fetchAuthSignIn } from 'store/ducks/auth/thunks';
import { selectIsLoadingAuth } from 'store/ducks/auth/selectors';
import sts from './styles.module.scss';

const initialValues: SignInRequestModel = {
  username: '',
  password: '',
};

const SignInSchema = Yup.object().shape({
  username: Yup.string().required('Введите логин'),
  password: Yup.string()
    .max(6, 'Максимальная длина пароля 8 символов')
    .required('Введите пароль'),
});

const SignIn: React.FC = (): React.ReactElement => {
  const dispatch = useDispatch();
  const isLoadingAuth = useSelector(selectIsLoadingAuth);

  const { values, handleSubmit, handleChange, errors } = useFormik({
    initialValues: initialValues,
    validationSchema: SignInSchema,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: (values: SignInRequestModel) => handleSubmitForm(values),
  });

  const handleSubmitForm = (data: SignInRequestModel) => {
    dispatch(fetchAuthSignIn(data));
  };

  return (
    <div className={sts.authPage}>
      <div className={sts.container}>
        <h1 className={sts.container__title}>
          Центр контроля качества и сертификации лекарственных средств
        </h1>
        <div className={sts.container__formWrapper}>
          <h3 className={sts.container__formWrapper_title}>Вход</h3>
          <form onSubmit={handleSubmit}>
            <InputText
              name="username"
              placeholder="Логин"
              value={values.username}
              type="text"
              startIcon={<UserIcon />}
              сontainerClassName={sts.authForm__input}
              validateText={errors.username}
              onChange={handleChange}
            />
            <InputText
              name="password"
              placeholder="Пароль"
              value={values.password}
              type="password"
              startIcon={<LockIcon />}
              сontainerClassName={sts.authForm__input}
              validateText={errors.password}
              onChange={handleChange}
            />
            <Button
              type="submit"
              variant="filled"
              classNameButton={sts.authForm__button}
              disabled={isLoadingAuth}
            >
              Вход
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
