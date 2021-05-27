import React from 'react';
import clsn from 'classnames';
import Button from 'ui/Button';
import {
  InputText,
  Select,
  DateInput,
  Checkbox,
  Switch,
  Textarea,
} from 'ui/Inputs';
import { IOptionType } from 'ui/Inputs/Select/types';
import { MeasuringInstrumentModel } from 'models/equipments/measuringInstrument';
import { SearchFormProps } from '../types';
import sts from '../styles.module.scss';

const appointments: IOptionType[] = [
  {
    id: 1,
    name: 'Исследование флюоресценции',
  },
  {
    id: 2,
    name: 'Определение электропроводности',
  },
  {
    id: 3,
    name: 'Определение плотности',
  },
  {
    id: 4,
    name: 'Контроль разряжения вакуум-сущильного шкафа',
  },
  {
    id: 5,
    name: 'Определение массы',
  },
];

const locations: IOptionType[] = [
  {
    id: 1,
    name: 'Оптическая',
  },
  {
    id: 2,
    name: 'Сероводородная',
  },
  {
    id: 3,
    name: 'Термостатная',
  },
];

const MeasuringInstrumentFrom: React.FC<
  SearchFormProps<MeasuringInstrumentModel>
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
                Основные данные о средстве измерения
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
              <div className={sts.form__inputs_column_cell}>
                <Select
                  name='change_name_field'
                  label='Наименование определяемых характеристик'
                  options={appointments}
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
                Свидетельство о поверке
              </h3>
              <div className={sts.form__inputs_column_cell}>
                <InputText
                  id='verificationCertificate'
                  name='verificationCertificate'
                  value=''
                  type='text'
                  label='Свидетельство о поверке'
                  placeholder='Введите номер свидетельства о поверке'
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
                <Checkbox name='annually' label='Ежегодно' />
              </div>
              <div className={sts.form__inputs_column_cell}>
                <Switch name='statusVerification' labels={['В эксплуатации', 'На поверке']} />
              </div>
            </div>
          </div>

          <div className={sts.form__inputs_row}>
            <div className={clsn(sts.form__inputs_column, sts['--col_7'])}>
              <h3 className={sts.form__inputs_heading}>
                Метрологические характеристики средства измерения
              </h3>
              <div className={sts.form__inputs_column_cell}>
                <InputText
                  id='measuringRange'
                  name='measuringRange'
                  value=''
                  type='text'
                  label='Диапазон измерений'
                  placeholder='Введите диапазон измерений'
                />
              </div>
              <div className={sts.form__inputs_column_cell}>
                <InputText
                  id='accuracyClass'
                  name='accuracyClass'
                  value=''
                  type='text'
                  label='Класс точности (разряд), погрешность'
                  placeholder='Введите класс точности (разряд), погрешность'
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
                  placeholder='Введите страну'
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
                  name='change_name_field'
                  label='Право собсвенности'
                  options={locations}
                  value={null}
                />
                <Select
                  name='change_name_field'
                  label='Место установки или хранения'
                  options={locations}
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

export default MeasuringInstrumentFrom;
