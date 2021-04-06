import React from 'react';
import clsn from 'classnames';
import { InputText } from 'ui/Inputs';
import Button from 'ui/Button';
import { AuxiliaryEquipmentModel } from 'models/equipments/auxiliaryEquipment';
import { SearchFormProps } from '../types';
import sts from '../styles.module.scss';

const AuxiliaryEquipmentSearchFrom: React.FC<
  SearchFormProps<AuxiliaryEquipmentModel>
> = (): React.ReactElement => {
  const handleSubmitForm = () => {
    return;
  };

  return (
    <div className={sts.formWrapper}>
      <form className={sts.form} onSubmit={handleSubmitForm}>
        <div className={sts.form__inputs}>
          <div className={sts.form__inputs_row}>
            <div className={clsn(sts.form__inputs_column, sts['--col_6'])}>
              <div className={sts.form__inputs_column_cell}>
                <InputText
                  id='name'
                  name='name'
                  value=''
                  type='text'
                  label='Наименование вспомогательного оборудования / марка'
                  placeholder='Введите наименование вспомогательного оборудования или марку'
                />
              </div>
            </div>
            <div className={clsn(sts.form__inputs_column, sts['--col_3'])}>
              <div className={sts.form__inputs_column_cell}>
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
            <div className={clsn(sts.form__inputs_column, sts['--col_3'])}>
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

export default AuxiliaryEquipmentSearchFrom;
