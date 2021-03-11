import React from 'react';
import { InputText } from 'ui/Inputs';
import Button from 'ui/Button';
import { LockIcon, UserIcon } from 'ui/IconsSvg';
import sts from './styles.module.scss';

const SignIn: React.FC = (): React.ReactElement => {
  return (
    <div className={sts.authPage}>
      <div className={sts.container}>
        <h1 className={sts.container__title}>
          Центр контроля качества и сертификации лекарственных средств
        </h1>
        <div className={sts.container__formWrapper}>
          <h3 className={sts.container__formWrapper_title}>Вход</h3>
          <form className={sts.authForm}>
            <InputText
              name='login'
              placeholder='Логин'
              value=''
              type='text'
              startIcon={<UserIcon />}
              сontainerClassName={sts.authForm__input}
            />
            <InputText
              name='password'
              placeholder='Пароль'
              value=''
              type='password'
              startIcon={<LockIcon />}
              сontainerClassName={sts.authForm__input}
            />
            <Button
              type='submit'
              variant='filled'
              classNameButton={sts.authForm__button}
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
