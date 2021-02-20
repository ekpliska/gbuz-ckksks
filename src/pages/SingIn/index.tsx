import React from 'react';
import styles from './styles.module.scss';

const SingIn: React.FC = (): React.ReactElement => {
  return (
    <div className={styles.container}>
      <div className={styles.container__auth}>
        <h1 className={styles.container__auth__title}>Центр контроля качества и сертификации лекарственных средств</h1>
        <div className={styles.container__auth__form}>

        </div>
      </div>
    </div>
  );
};

export default SingIn;