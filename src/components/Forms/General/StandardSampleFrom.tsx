import React from 'react';
import clsn from 'classnames';
import Button from 'ui/Button';
import {
  InputText,
  Select,
  DateInput,
  Textarea,
} from 'ui/Inputs';
import { StandardSampleModel } from 'models/equipments';
import { SearchFormProps } from '../types';
import sts from '../styles.module.scss';

const StandardSampleFrom: React.FC<
  SearchFormProps<StandardSampleModel>
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
                Основные данные о стандартном образце
              </h3>
              <div className={sts.form__inputs_column_cell}>
                <InputText
                  id='name'
                  name='name'
                  value=''
                  type='text'
                  label='Наименование вспомогательного оборудования'
                  placeholder='Введите наименование вспомогательного оборудования'
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
                  label='Назначение'
                  options={[]}
                  value={null}
                />
                <Select
                  name='change_name_field'
                  label='Категория стандартного образца'
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
                  id='number'
                  name='number'
                  value=''
                  type='text'
                  label='Номер'
                  placeholder='Введите номер'
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
                  label='Страна'
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
                  label='Дата выпуска экземпляра'
                  placeholder='ГГГГ'
                  dateFormat='YYYY'
                  picker='year'
                  value={null}
                />
              </div>
            </div>
          </div>

          <div className={sts.form__inputs_row}>
            <div className={clsn(sts.form__inputs_column, sts['--col_7'])}>
              <h3 className={sts.form__inputs_heading}>
                Метрологические характеристики стандартного образца
              </h3>
              <div
                className={clsn(
                  sts.form__inputs_column_cell,
                  sts['--cell_7-5'],
                )}
              >
                <InputText
                  id='certifiedValue'
                  name='certifiedValue'
                  value=''
                  type='text'
                  label='Наименование и аттестованное значение'
                  placeholder='Введите наименование и аттестованное значение'
                />
                <InputText
                  id='infelicity'
                  name='infelicity'
                  value=''
                  type='text'
                  label='Погрешность аттестованного значения'
                  placeholder='Введите погрешность аттестованного значения'
                />
              </div>
              <div className={sts.form__inputs_column_cell}>
                <Textarea
                  id='additionalInfo'
                  name='additionalInfo'
                  value=''
                  label='Дополнительные сведения'
                  placeholder='Введите дополнительные сведения...'
                  maxCountLetters={250}
                  isCounterVisible
                />
              </div>
            </div>
            <div className={clsn(sts.form__inputs_column, sts['--col_5'])}>
              <h3 className={sts.form__inputs_heading}>
                Информация о нормативном документе и сроке годности
              </h3>
              <div className={sts.form__inputs_column_cell}>
                <InputText
                  id='normativeDocument'
                  name='normativeDocument'
                  value=''
                  type='text'
                  label='Нормативный документа'
                  placeholder='Введите номер нормативного документа'
                />
              </div>
              <div
                className={clsn(
                  sts.form__inputs_column_cell,
                  sts['--cell_4-4'],
                )}
              >
                <DateInput
                  value={null}
                  picker='month'
                  label='Срок годности'
                  dateFormat='MM.YYYY'
                  placeholder='мм.гггг'
                />
              </div>
            </div>
          </div>

          <div className={sts.form__inputs_row}>
            <div className={clsn(sts.form__inputs_column, sts['--col_12'])}>
              <h3 className={sts.form__inputs_heading}>Дополнительно</h3>
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

export default StandardSampleFrom;
