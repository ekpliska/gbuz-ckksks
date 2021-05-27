import React from 'react';
import clsn from 'classnames';
import { InputText, DateInput, Select, Checkbox } from 'ui/Inputs';
import Button from 'ui/Button';
import { StandardSampleModel } from 'models/equipments/standardSample';
import { SearchFormProps } from '../types';
import sts from '../styles.module.scss';

const StandardSamplesSearchFrom: React.FC<
  SearchFormProps<StandardSampleModel>
> = (): React.ReactElement => {
  const handleSubmitForm = () => {
    return;
  };

  return (
    <div className={sts.formWrapper}>
      <form className={sts.form} onSubmit={handleSubmitForm}>
        <div className={sts.form__inputs}>
          <div className={sts.form__inputs_row}>
            <div className={clsn(sts.form__inputs_column, sts['--col_5'])}>
              <div className={sts.form__inputs_column_cell}>
                <InputText
                  id='name'
                  name='name'
                  value=''
                  type='text'
                  label='Наименование стандартного образца'
                  placeholder='Введите наименование стандартного образца'
                />
              </div>
            </div>
            <div className={clsn(sts.form__inputs_column, sts['--col_3'])}>
              <div className={sts.form__inputs_column_cell}>
                <InputText
                  id='normativeDocument'
                  name='normativeDocument'
                  value=''
                  type='text'
                  label='Нормативный документ'
                  placeholder='Введите номер нормативного документа'
                />
              </div>
            </div>
            <div className={clsn(sts.form__inputs_column, sts['--col_2'])}>
              <div className={sts.form__inputs_column_cell}>
                <DateInput
                  value={null}
                  picker='month'
                  label='Срок годности'
                  dateFormat='MM.YYYY'
                  placeholder='мм.гггг'
                />
              </div>
            </div>
            <div className={clsn(sts.form__inputs_column, sts['--col_2'])}>
              <div className={sts.form__inputs_column_cell}>
                <Select
                  name='change_name_field'
                  value={null}
                  options={[]}
                  label='Производитель'
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
          <Checkbox name='archive' label='Искать в архивных' />
        </div>
      </form>
    </div>
  );
};

export default StandardSamplesSearchFrom;
