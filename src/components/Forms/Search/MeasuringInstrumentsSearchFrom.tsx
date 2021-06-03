import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
import { fetchTableData, FetchTableDataProps } from 'store/ducks/table/thunks';
import { normalizedObject } from 'utils/helpers';
import {
  selectorTableOrder,
  selectorTablePagination,
} from 'store/ducks/table/selectors';

const MeasuringInstrumentsSearchFrom: React.FC<
  SearchFormProps<MeasuringInstrumentModel>
> = (): React.ReactElement => {
  const dispatch = useDispatch();
  const searchFields = useSelector(selectorSearchFields);
  const order = useSelector(selectorTableOrder);
  const page = useSelector(selectorTablePagination);

  const {
    handleChangeInput,
    handleChangeSelect,
    handleClearInput,
    handleResetForm,
  } = useChangeSearchForm(EquipmentEntity.measuringInstrument);

  const isDisabled = React.useMemo<boolean>(() => {
    if (searchFields) {
      return Object.keys(searchFields).filter((key) => searchFields[key]).length
        ? false
        : true;
    }
    return true;
  }, [searchFields]);

  const handleSubmitForm = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const dataRequest: FetchTableDataProps = {
      entity: EquipmentEntity.measuringInstrument,
      requestParams: {
        search: normalizedObject(searchFields),
        ...(order && { order: order }),
        ...(page && {
          page: { page_number: page.page_number, page_size: page.page_size },
        }),
      },
    };

    dispatch(fetchTableData(dataRequest));
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
                  value={(searchFields?.name_mi as string) || ''}
                  type='text'
                  label='Наименование средства измерения / марка'
                  placeholder='Введите наименование средства измерения или марку'
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
                  id='inventory_number_mi'
                  name='inventory_number_mi'
                  value={(searchFields?.inventory_number_mi as string) || ''}
                  type='text'
                  label='Инвентарный номер'
                  placeholder='Введите инвентарный номер'
                  onChange={handleChangeInput}
                  onClearInput={handleClearInput}
                />
                <InputText
                  id='factory_number_mi'
                  name='factory_number_mi'
                  value={(searchFields?.factory_number_mi as string) || ''}
                  type='text'
                  label='Заводской номер'
                  placeholder='Введите заводской номер'
                  onChange={handleChangeInput}
                  onClearInput={handleClearInput}
                />
              </div>
            </div>
            <div className={clsn(sts.form__inputs_column, sts['--col_4'])}>
              <div className={sts.form__inputs_column_cell}>
                <InputText
                  id='certificate_mi'
                  name='certificate_mi'
                  value={(searchFields?.certificate_mi as string) || ''}
                  type='text'
                  label='Серия/Номер свидетельства о поверке'
                  placeholder='Введите серию/номер свидетельства о поверке'
                  onChange={handleChangeInput}
                  onClearInput={handleClearInput}
                />
              </div>
              <div className={sts.form__inputs_column_cell}>
                <Select
                  name='status_mi'
                  label='Статус поверки'
                  value={(searchFields?.status_mi as SelectValue) || null}
                  options={verificationStatuses}
                  onSelect={handleChangeSelect}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={sts.form__buttons}>
          <Button type='submit' variant='filled' disabled={isDisabled}>
            Найти
          </Button>
          <Button type='reset' variant='outlined' onClick={handleResetForm}>
            Очистить
          </Button>
        </div>
      </form>
    </div>
  );
};

export default MeasuringInstrumentsSearchFrom;
