import React from 'react';
import clsn from 'classnames';
import { InputText, Select } from 'ui/Inputs';
import Button from 'ui/Button';
import { IOptionType } from 'ui/Inputs/Select/types';
import { TestEquipmentModel } from 'models/equipments/testEquipment';
import { SearchFormProps } from '../types';
import sts from '../styles.module.scss';

const statuses: IOptionType[] = [
  {
    id: 1,
    value: 'На поверке',
  },
  {
    id: 2,
    value: 'В эксплуатации',
  },
];

const TestEquipmentsSearchFrom: React.FC<
  SearchFormProps<TestEquipmentModel>
> = (): React.ReactElement => {

  const handleSubmitForm = () => {
    return;
  };

  return (
    <div className={sts.formWrapper}>
      <form className={sts.form} onSubmit={handleSubmitForm}>
        <div className={sts.form__inputs}>
          <div className={sts.form__inputs_row}>
            <div className={clsn(sts.form__inputs_column, sts['--col_8'])}>
              <div className={sts.form__inputs_column_cell}>
                <InputText
                  id='name'
                  name='name'
                  value=''
                  type='text'
                  label='Наименование испытательного оборудования / марка'
                  placeholder='Введите наименование испытательного оборудования или марку'
                />
              </div>
              <div className={clsn(sts.form__inputs_column_cell, sts['--cell_6-6'])}>
                <InputText
                  id='inventoryNumber'
                  name='inventoryNumber'
                  value=''
                  type='text'
                  label='Инвентарный номер'
                  placeholder='Введите инвентарный номер'
                />
                <InputText
                  id='attestationDocument'
                  name='attestationDocument'
                  value=''
                  type='text'
                  label='Номер документа об аттестации'
                  placeholder='Введите номер документа об аттестации'
                />
              </div>
            </div>
            <div className={clsn(sts.form__inputs_column, sts['--col_4'])}>
              <div className={sts.form__inputs_column_cell}>
                <InputText
                  id='factoryNumber'
                  name='factoryNumber'
                  value=''
                  type='text'
                  label='Заводской номер'
                  placeholder='Введите заводской номер'
                />
              </div>
              <div className={sts.form__inputs_column_cell}>
                <Select
                  label='Статус поверки'
                  options={statuses}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={sts.form__buttons}>
          <Button type='submit' variant='filled'>Найти</Button>
          <Button type='reset' variant='outlined'>Очистить</Button>
        </div>
      </form>
    </div>
  );
};

export default TestEquipmentsSearchFrom;
