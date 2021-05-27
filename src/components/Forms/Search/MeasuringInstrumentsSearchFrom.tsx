import React from 'react';
import { useDispatch } from 'react-redux';
import clsn from 'classnames';
import { InputText, Select } from 'ui/Inputs';
import Button from 'ui/Button';
import { IOptionType } from 'ui/Inputs/Select/types';
import { MeasuringInstrumentModel } from 'models/equipments/measuringInstrument';
import { SearchFormProps } from '../types';
import sts from '../styles.module.scss';
import { resetSearchFields, setSearchField } from 'store/ducks/search/searchSlice';

const statuses: IOptionType[] = [
  {
    id: 1,
    name: 'На поверке',
  },
  {
    id: 2,
    name: 'В эксплуатации',
  },
];

const MeasuringInstrumentsSearchFrom: React.FC<
  SearchFormProps<MeasuringInstrumentModel>
> = (): React.ReactElement => {
  const dispatch = useDispatch();

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    // console.log(name, value);
    dispatch(setSearchField({ name, value }));
  };

  const handleChangeSelect = (value: IOptionType | null, inputName: string) => {
    dispatch(setSearchField({ name: inputName, value }));
  };

  const handleSubmitForm = () => {
    return;
  };

  const handleResetForm = () => {
    dispatch(resetSearchFields());
  };

  return (
    <div className={sts.formWrapper}>
      <form className={sts.form} onSubmit={handleSubmitForm}>
        <div className={sts.form__inputs}>
          <div className={sts.form__inputs_row}>
            <div className={clsn(sts.form__inputs_column, sts['--col_8'])}>
              <div className={sts.form__inputs_column_cell}>
                <InputText
                  id='name_mi'
                  name='name_mi'
                  value=''
                  type='text'
                  label='Наименование средства измерения / марка'
                  placeholder='Введите наименование средства измерения или марку'
                  onChange={handleChangeInput}
                />
              </div>
              <div className={clsn(sts.form__inputs_column_cell, sts['--cell_6-6'])}>
                <InputText
                  id='inventory_number_mi'
                  name='inventory_number_mi'
                  value=''
                  type='text'
                  label='Инвентарный номер'
                  placeholder='Введите инвентарный номер'
                  onChange={handleChangeInput}
                />
                <InputText
                  id='factory_number_mi'
                  name='factory_number_mi'
                  value=''
                  type='text'
                  label='Заводской номер'
                  placeholder='Введите заводской номер'
                  onChange={handleChangeInput}
                />
              </div>
            </div>
            <div className={clsn(sts.form__inputs_column, sts['--col_4'])}>
              <div className={sts.form__inputs_column_cell}>
                <InputText
                  id='certificate_mi'
                  name='certificate_mi'
                  value=''
                  type='text'
                  label='Серия/Номер свидетельства о поверке'
                  placeholder='Введите серию/номер свидетельства о поверке'
                />
              </div>
              <div className={sts.form__inputs_column_cell}>
                <Select
                  name='status_mi'
                  label='Статус поверки'
                  options={statuses}
                  onSelect={handleChangeSelect}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={sts.form__buttons}>
          <Button type='submit' variant='filled'>Найти</Button>
          <Button type='reset' variant='outlined' onClick={handleResetForm}>Очистить</Button>
        </div>
      </form>
    </div>
  );
};

export default MeasuringInstrumentsSearchFrom;
