import React from 'react';
import { useSelector } from 'react-redux';
import clsn from 'classnames';
import Button from 'ui/Button';
import { InputText, Select } from 'ui/Inputs';
import { SelectValue } from 'ui/Inputs/Select/types';
import { EquipmentEntity, MeasuringInstrumentModel } from 'models/equipments';
import { selectorSearchFields } from 'store/ducks/search/selectors';
import { verificationStatuses } from 'utils/constants';
import { SearchFormProps } from '../types';
import sts from '../styles.module.scss';
import { useChangeSearchForm } from 'hooks/useChangeSearchForm';

const MeasuringInstrumentsSearchFrom: React.FC<
  SearchFormProps<MeasuringInstrumentModel>
> = (): React.ReactElement => {
  const searchFields = useSelector(selectorSearchFields);

  const {
    handleChangeInput,
    handleChangeSelect,
    handleClearInput,
    handleResetForm,
  } = useChangeSearchForm(EquipmentEntity.measuringInstrument);

  const handleSubmitForm = (event: React.SyntheticEvent) => {
    event.preventDefault();
  };

  return (
    <div className={sts.formWrapper}>
      <form className={sts.form} onSubmit={handleSubmitForm}>
        <div className={sts.form__inputs}>
          <div className={sts.form__inputs_row}>
            <div className={clsn(sts.form__inputs_column, sts['--col_8'])}>
              <div className={sts.form__inputs_column_cell}>
                <InputText
                  id="name_mi"
                  name="name_mi"
                  value={(searchFields?.values?.name_mi as string) || ''}
                  type="text"
                  label="Наименование средства измерения / марка"
                  placeholder="Введите наименование средства измерения или марку"
                  onChange={handleChangeInput}
                  onClearInput={handleClearInput}
                />
              </div>
              <div
                className={clsn(
                  sts.form__inputs_column_cell,
                  sts['--cell_6-6'],
                )}
              >
                <InputText
                  id="inventory_number_mi"
                  name="inventory_number_mi"
                  value={
                    (searchFields?.values?.inventory_number_mi as string) || ''
                  }
                  type="text"
                  label="Инвентарный номер"
                  placeholder="Введите инвентарный номер"
                  onChange={handleChangeInput}
                  onClearInput={handleClearInput}
                />
                <InputText
                  id="factory_number_mi"
                  name="factory_number_mi"
                  value={
                    (searchFields?.values?.factory_number_mi as string) || ''
                  }
                  type="text"
                  label="Заводской номер"
                  placeholder="Введите заводской номер"
                  onChange={handleChangeInput}
                  onClearInput={handleClearInput}
                />
              </div>
            </div>
            <div className={clsn(sts.form__inputs_column, sts['--col_4'])}>
              <div className={sts.form__inputs_column_cell}>
                <InputText
                  id="certificate_mi"
                  name="certificate_mi"
                  value={(searchFields?.values?.certificate_mi as string) || ''}
                  type="text"
                  label="Серия/Номер свидетельства о поверке"
                  placeholder="Введите серию/номер свидетельства о поверке"
                  onChange={handleChangeInput}
                  onClearInput={handleClearInput}
                />
              </div>
              <div className={sts.form__inputs_column_cell}>
                <Select
                  name="status_mi"
                  label="Статус поверки"
                  value={(searchFields?.values?.status_mi as SelectValue) || ''}
                  options={verificationStatuses}
                  onSelect={handleChangeSelect}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={sts.form__buttons}>
          <Button
            type="submit"
            variant="filled"
          >
            Найти
          </Button>
          <Button type="reset" variant="outlined" onClick={handleResetForm}>
            Очистить
          </Button>
        </div>
      </form>
    </div>
  );
};

export default MeasuringInstrumentsSearchFrom;
