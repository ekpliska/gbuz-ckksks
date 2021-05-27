import React from 'react';
import clsn from 'classnames';
import Button from 'ui/Button';
import {
  InputText,
  Select,
  DateInput,
  Textarea,
  Checkbox,
} from 'ui/Inputs';
import { EmployeesModel } from 'models/equipments/employee';
import { SearchFormProps } from '../types';
import sts from '../styles.module.scss';

const EmployeeFrom: React.FC<
  SearchFormProps<EmployeesModel>
> = (): React.ReactElement => {

  const handleSubmitForm = () => {
    return;
  };

  return (
    <div className={clsn(sts.formWrapper, sts['--general-form'])}>
      <form className={sts.from} onSubmit={handleSubmitForm}>
        <div className={sts.form__inputs}>
          <div className={sts.form__inputs_row}>
            <div className={clsn(sts.form__inputs_column, sts['--col_7'])}>
              <h3 className={sts.form__inputs_heading}>
                Основные данные о сотруднике
              </h3>
              <div className={clsn(sts.form__inputs_column_cell, sts['--cell_4-4'])}>
                <InputText
                  id='lastname'
                  name='lastname'
                  value=''
                  type='text'
                  label='Фамилия'
                  placeholder='Введите фамилию сотрудника'
                />
                <InputText
                  id='firstname'
                  name='firstname'
                  value=''
                  type='text'
                  label='Имя'
                  placeholder='Введите имя сотрудника'
                />
                <InputText
                  id='middlename'
                  name='middlename'
                  value=''
                  type='text'
                  label='Отчество'
                  placeholder='Введите отчество сотрудника'
                />
              </div>
              <div className={clsn(sts.form__inputs_column_cell, sts['--cell_5-7'])}>
                <DateInput
                  label='Дата рождения'
                  value={null}
                />
                <InputText
                  id='birthPlace'
                  name='birthPlace'
                  value=''
                  type='text'
                  label='Место рождения'
                  placeholder='Введите место рождения'
                />
              </div>
              <h3 className={sts.form__inputs_heading}>Дополнительная информация</h3>
              <div className={clsn(sts.form__inputs_column_cell, sts['--cell_5-7'])}>
                <InputText
                  id='passport'
                  name='passport'
                  value=''
                  type='text'
                  label='Паспорт (серия, номер)'
                  placeholder='0000 000-000'
                />
                <InputText
                  id='passportInfo'
                  name='passportInfo'
                  value=''
                  type='text'
                  label='Кем и когда выдан'
                  placeholder='Укажите дополнительную информацию'
                />
              </div>
              <div className={sts.form__inputs_column_cell}>
                <InputText
                  id='snils'
                  name='snils'
                  value=''
                  type='text'
                  label='СНИЛС'
                  placeholder='000-000-000-00'
                />
              </div>
            </div>

            <div className={clsn(sts.form__inputs_column, sts['--col_5'])}>
              <h3 className={sts.form__inputs_heading}>
                Информация о трудовом договоре
              </h3>
              <div
                className={clsn(
                  sts.form__inputs_column_cell,
                  sts['--cell_4-4'],
                )}
              >
                <Select
                  name='change_name_field'
                  label='Нормативный документ'
                  options={[]}
                  value={null}
                />
                <InputText
                  id='documentMumber'
                  name='documentMumber'
                  value=''
                  type='text'
                  label='Номер'
                  placeholder='Введите номер нормативного документа'
                />
                <DateInput
                  label='Дата составления'
                  value={null}
                />
              </div>
              <div
                className={clsn(
                  sts.form__inputs_column_cell,
                  sts['--cell_6-6'],
                )}
              >
                <Select
                  name='change_name_field'
                  label='Должность'
                  options={[]}
                  value={null}
                />
                <InputText
                  id='descriptionNumber'
                  name='descriptionNumber'
                  value=''
                  type='text'
                  label='Номер должностной инструкции'
                  placeholder='Введите номер должностной инструкции'
                />
              </div>
              <div
                className={clsn(
                  sts.form__inputs_column_cell,
                  sts['--cell_4-4'],
                )}
              >
                <DateInput
                  label='Дата приема на работу'
                  value={null}
                />
              </div>
              <div
                className={clsn(
                  sts.form__inputs_column_cell,
                  sts['--cell_6-6'],
                )}
              >
                <Checkbox name='isMainPlace' label='Основное место работы' />
                <Checkbox name='isParttime' label='Работа по совместительству' />
              </div>
              <div className={sts.form__inputs_column_cell}>
                <Textarea
                  id='experience'
                  name='experience'
                  value=''
                  label='Практический опыт'
                  placeholder='Практический опыт...'
                  maxCountLetters={1000}
                  isCounterVisible
                />
              </div>
            </div>
          </div>

          <div className={sts.form__inputs_row}>
            <div className={clsn(sts.form__inputs_column, sts['--col_7'])}>
              <h3 className={sts.form__inputs_heading}>Образование</h3>
              <div className={sts.form__inputs_column_cell}>
                <InputText
                  id='universityName'
                  name='universityName'
                  value=''
                  type='text'
                  label='Учебное заведение'
                  placeholder='Введите наименование учебного заведения'
                />
              </div>
              <div
                className={clsn(sts.form__inputs_column_cell, sts['--cell_5-7'])}
              >
                <DateInput
                  label='Год окончания'
                  picker='year'
                  dateFormat='YYYY'
                  placeholder='ГГГГ'
                  value={null}
                />
                <InputText
                  id='qualification'
                  name='qualification'
                  value=''
                  type='text'
                  label='Квалификация по документу об образовании'
                  placeholder='Введите квалификацию'
                />
              </div>
              <div className={sts.form__inputs_column_cell}>
                <InputText
                  id='diplomaDetails'
                  name='diplomaDetails'
                  value=''
                  type='text'
                  label='Реквизиты документа об образовании'
                  placeholder='Введите реквизиты документа об образовании'
                />
              </div>
            </div>
            <div className={clsn(sts.form__inputs_column, sts['--col_5'])}>
              <h3 className={sts.form__inputs_heading}>Дополнительное образование</h3>
              <div className={sts.form__inputs_column_cell}>
                edit table...
              </div>
            </div>
          </div>

        </div>
        <div className={clsn(sts.form__buttons, sts['--general-form'])}>
          <Button type='submit' variant='filled'>
            Сохранить
          </Button>
          <Button type='reset' variant='outlined'>
            Отмена
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EmployeeFrom;
