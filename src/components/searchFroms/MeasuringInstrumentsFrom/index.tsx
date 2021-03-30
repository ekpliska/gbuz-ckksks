import React from 'react';
import clsn from 'classnames';
import { InputText, Select } from 'ui/Inputs';
import Button from 'ui/Button';
import { IOptionType } from 'ui/Inputs/Select/types';
import { SearchFormProps, MeasuringInstrumentsDataType } from '../types';
import sts from '../styles.module.scss';

const statuses: IOptionType[] = [
  {
    id: 1,
    value: 'На поверке',
  },
  {
    id: 2,
    value: 'В лаборатории',
  },
];

const MeasuringInstrumentsFrom: React.FC<
  SearchFormProps<MeasuringInstrumentsDataType>
> = (): React.ReactElement => {

  const handleSubmitForm = () => {
    return;
  };

  return (
    <div className={sts.formWrapper}>
      <form className={sts.form} onSubmit={handleSubmitForm}>
        <div className={sts.form__inputs}>
          <div className={sts.form__inputs_row}>
            <div className={clsn(sts.form__inputs_row, sts['--col_8'])}>
              <InputText
                id='nameEquiments'
                name='nameEquiments'
                value=''
                type='text'
                label='Наименование средства измерения / марка'
                placeholder='Введите наименование средства измерения или марку'
              />
            </div>
            <div className={clsn(sts.form__inputs_row, sts['--col_4'])}>
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
          <div className={sts.form__inputs_row}>
            <div className={clsn(sts.form__inputs_row, sts['--col_4'])}>
              <InputText
                id='inventoryNumber'
                name='inventoryNumber'
                value=''
                type='text'
                label='Инвентарный номер'
                placeholder='Введите инвентарный номер'
              />
            </div>
            <div className={clsn(sts.form__inputs_row, sts['--col_4'])}>
              <InputText
                id='certificateNumber'
                name='certificateNumber'
                value=''
                type='text'
                label='Номер свидетельства о поверке'
                placeholder='Введите номер свидетельства о поверке'
              />
            </div>
            <div className={clsn(sts.form__inputs_row, sts['--col_4'])}>
              <Select
                label='Статус поверки'
                options={statuses}
              />
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

export default MeasuringInstrumentsFrom;
