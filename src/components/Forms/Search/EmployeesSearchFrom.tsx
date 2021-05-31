import React from 'react';
import clsn from 'classnames';
import { InputText } from 'ui/Inputs';
import Button from 'ui/Button';
import { EmployeesModel } from 'models/equipments';
import { SearchFormProps } from '../types';
import sts from '../styles.module.scss';

const EmployeesSearchFrom: React.FC<
  SearchFormProps<EmployeesModel>
> = (): React.ReactElement => {
  const handleSubmitForm = () => {
    return;
  };

  return (
    <div className={sts.formWrapper}>
      <form className={sts.form} onSubmit={handleSubmitForm}>
        <div className={sts.form__inputs}>
          <div className={sts.form__inputs_row}>
            <div className={clsn(sts.form__inputs_column, sts['--col_4'])}>
              <div className={sts.form__inputs_column_cell}>
                <InputText
                  id='lastname'
                  name='lastname'
                  value=''
                  type='text'
                  label='Фамилия'
                  placeholder='Введите фамилию сотрудника'
                />
              </div>
            </div>
            <div className={clsn(sts.form__inputs_column, sts['--col_2'])}>
              <div className={sts.form__inputs_column_cell}>
                <InputText
                  id='firstname'
                  name='firstname'
                  value=''
                  type='text'
                  label='Имя'
                  placeholder='Введите имя сотрудника'
                />
              </div>
            </div>
            <div className={clsn(sts.form__inputs_column, sts['--col_3'])}>
              <div className={sts.form__inputs_column_cell}>
                <InputText
                  id='middlename'
                  name='middlename'
                  value=''
                  type='text'
                  label='Отчество'
                  placeholder='Введите отчество сотрудника'
                />
              </div>
            </div>
            <div className={clsn(sts.form__inputs_column, sts['--col_3'])}>
              <div className={sts.form__inputs_column_cell}>
                <InputText
                  id='documentMumber'
                  name='documentMumber'
                  value=''
                  type='text'
                  label='Номер трудового договора'
                  placeholder='Введите номер трудового договора'
                />
              </div>
            </div>
          </div>
        </div>
        <div className={sts.form__buttons}>
          <Button type='submit' variant='filled'>
            Найти
          </Button>
          <Button type='reset' variant='outlined'>
            Очистить
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EmployeesSearchFrom;
