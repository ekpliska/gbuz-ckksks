import React from 'react';
import clsn from 'classnames';
import Button from 'ui/Button';
import {
  InputText,
  Select,
  DateInput,
  Switch,
  Textarea,
} from 'ui/Inputs';
import { TestEquipmentModel } from 'models/equipments/testEquipment';
import { SearchFormProps } from '../types';
import sts from '../styles.module.scss';

const TestEquipmentFrom: React.FC<
  SearchFormProps<TestEquipmentModel>
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
                Основные данные об испытательном оборудовании
              </h3>
              <div className={sts.form__inputs_column_cell}>
                <InputText
                  id='name'
                  name='name'
                  value=''
                  type='text'
                  label='Наименование средства измерения'
                  placeholder='Введите наименование средства измерения'
                />
              </div>
              <div
                className={clsn(
                  sts.form__inputs_column_cell,
                  sts['--cell_6-6'],
                )}
              >
                <Select
                  label='Наименование определяемых характеристик'
                  options={[]}
                  value={null}
                />
                <Select
                  label='Наименование испытуемых групп объектов'
                  options={[]}
                  value={null}
                />
              </div>
              <div
                className={clsn(
                  sts.form__inputs_column_cell,
                  sts['--cell_5-7'],
                )}
              >
                <InputText
                  id='type'
                  name='type'
                  value=''
                  type='text'
                  label='Тип (марка)'
                  placeholder='Введите тип (марку)'
                />
                <InputText
                  id='factoryNumber'
                  name='factoryNumber'
                  value=''
                  type='text'
                  label='Заводской номер'
                  placeholder='Введите заводской номер'
                />
              </div>
              <div
                className={clsn(
                  sts.form__inputs_column_cell,
                  sts['--cell_5-7'],
                )}
              >
                <DateInput
                  label='Год ввода в эксплаутацию'
                  placeholder='ГГГГ'
                  dateFormat='YYYY'
                  picker='year'
                  value={null}
                />
                <InputText
                  id='inventoryNumber'
                  name='inventoryNumber'
                  value=''
                  type='text'
                  label='Инвентарный номер'
                  placeholder='Введите инвентарный номер'
                />
              </div>
            </div>

            <div className={clsn(sts.form__inputs_column, sts['--col_5'])}>
              <h3 className={sts.form__inputs_heading}>
                Документы об аттестации
              </h3>
              <div className={sts.form__inputs_column_cell}>
                <InputText
                  id='attestationDocument'
                  name='attestationDocument'
                  value=''
                  type='text'
                  label='Документ об аттестации, номер'
                  placeholder='Введите название документа об аттестации и его номер'
                />
              </div>
              <div
                className={clsn(
                  sts.form__inputs_column_cell,
                  sts['--cell_4-4'],
                )}
              >
                <DateInput label='Срок действия, от' value={null} />
                <DateInput label='Срок действия, до' value={null} />
              </div>
              <div className={sts.form__inputs_column_cell}>
                <Switch name='statusVerification' labels={['В эксплуатации', 'На поверке']} />
              </div>
            </div>
          </div>

          <div className={sts.form__inputs_row}>
            <div className={clsn(sts.form__inputs_column, sts['--col_7'])}>
              <h3 className={sts.form__inputs_heading}>
                Технические характеристики
              </h3>
              <div className={sts.form__inputs_column_cell}>
                <InputText
                  id='specifications'
                  name='specifications'
                  value=''
                  type='text'
                  label='Технические характеристики'
                  placeholder='Введите технические характеристики'
                />
              </div>
            </div>
            <div className={clsn(sts.form__inputs_column, sts['--col_5'])}>
              <h3 className={sts.form__inputs_heading}>
                Основные данные о производителе
              </h3>
              <div
                className={clsn(
                  sts.form__inputs_column_cell,
                  sts['--cell_7-5'],
                )}
              >
                <InputText
                  id='manufacturer'
                  name='manufacturer'
                  value=''
                  type='text'
                  label='Наименование организации'
                  placeholder='Наименование огранизации производителя'
                />
                <InputText
                  id='country'
                  name='country'
                  value=''
                  type='text'
                  label='Страна, город'
                  placeholder='Введите страну, город'
                />
              </div>
              <div
                className={clsn(
                  sts.form__inputs_column_cell,
                  sts['--cell_4-4'],
                )}
              >
                <DateInput
                  label='Год выпуска'
                  placeholder='ГГГГ'
                  dateFormat='YYYY'
                  picker='year'
                  value={null}
                />
              </div>
            </div>
          </div>

          <div className={sts.form__inputs_row}>
            <div className={clsn(sts.form__inputs_column, sts['--col_12'])}>
              <h3 className={sts.form__inputs_heading}>Дополнительно</h3>
              <div
                className={clsn(sts.form__inputs_column_cell, sts['--cell_7-5'])}
              >
                <Select
                  label='Право собсвенности'
                  options={[]}
                  value={null}
                />
                <Select
                  label='Место установки или хранения'
                  options={[]}
                  value={null}
                />
              </div>
              <div className={sts.form__inputs_column_cell}>
                <Textarea
                  id='note'
                  name='note'
                  value=''
                  label='Примечание'
                  placeholder='Текст примечания...'
                  maxCountLetters={500}
                  isCounterVisible
                />
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

export default TestEquipmentFrom;
