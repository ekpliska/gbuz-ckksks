import React from 'react';
import clsn from 'classnames';
import Button from 'ui/Button';
import {
  InputText,
  Select,
  DateInput,
  Textarea,
} from 'ui/Inputs';
import { IndustrialPremiseModel } from 'models/equipments/industrialPremise';
import { SearchFormProps } from '../types';
import sts from '../styles.module.scss';

const IndustrialPremiseFrom: React.FC<
  SearchFormProps<IndustrialPremiseModel>
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
                Основные данные о производственном помещении
              </h3>
              <div className={sts.form__inputs_column_cell}>
                <InputText
                  id='name'
                  name='name'
                  value=''
                  type='text'
                  label='Наименование производственного помещения'
                  placeholder='Введите наименование производственного помещения'
                />
              </div>
              <div className={sts.form__inputs_column_cell}>
                <Select
                  name='change_name_field'
                  label='Назначение, в том числе виды проводимых испытаний для приемки и хранения образцов'
                  options={[]}
                  value={null}
                />
              </div>
              <div
                className={clsn(
                  sts.form__inputs_column_cell,
                  sts['--cell_4-4'],
                )}
              >
                <Select
                  name='change_name_field'
                  label='Тип помещения'
                  options={[]}
                  value={null}
                />
                <InputText
                  id='square'
                  name='square'
                  value=''
                  type='text'
                  label='Площадь'
                  placeholder='Введите площадь помещения'
                />
              </div>
              <div className={sts.form__inputs_column_cell}>
                <Select
                  name='change_name_field'
                  label='Перечень контролируемых параметров в помещении'
                  options={[]}
                  value={null}
                />
              </div>
              <div className={sts.form__inputs_column_cell}>
                <Select
                  name='change_name_field'
                  label='Перечень специального оборудования в помещении'
                  options={[]}
                  value={null}
                />
              </div>
            </div>

            <div className={clsn(sts.form__inputs_column, sts['--col_5'])}>
              <h3 className={sts.form__inputs_heading}>
                Информация о праве собственности
              </h3>
              <div className={sts.form__inputs_column_cell}>
                <InputText
                  id='normativeDocument'
                  name='normativeDocument'
                  value=''
                  type='text'
                  label='Нормативный документ'
                  placeholder='Введите наименование нормативного документа'
                />
              </div>
              <div
                className={clsn(
                  sts.form__inputs_column_cell,
                  sts['--cell_4-4'],
                )}
              >
                <InputText
                  id='series'
                  name='series'
                  value=''
                  type='text'
                  label='Серия'
                  placeholder='Наименование серию нормативного документа'
                />
                <InputText
                  id='number'
                  name='number'
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

export default IndustrialPremiseFrom;
