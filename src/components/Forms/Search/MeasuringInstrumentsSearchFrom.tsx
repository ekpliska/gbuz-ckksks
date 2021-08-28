import React from 'react';
import { useDispatch } from 'react-redux';
import { EquipmentEntity, MeasuringInstrumentModel } from 'models/equipments';
import Filter from 'ui/Filter';
import { Field } from 'store/ducks/search/state';
import { setSearchFields } from 'store/ducks/search/searchSlice';
import { SearchFormProps } from '../types';

const initialValues: Field = {
  name_mi: '',
  factory_number_mi: '',
  inventory_number_mi: '',
  certificate_mi: '',
  status_mi: '',
};

const MeasuringInstrumentsSearchFrom: React.FC<
  SearchFormProps<MeasuringInstrumentModel>
> = (): React.ReactElement => {
  const dispatch = useDispatch();

  const handleSubmit = React.useCallback((values) => {
    dispatch(setSearchFields({
      entity: EquipmentEntity.measuringInstrument,
      fields: values,
    }));
  }, [dispatch]);

  return (
    <>
      <Filter
        initialValues={initialValues}
        fields={[
          [
            {
              label: 'Наименование средства измерения / марка',
              type: 'TEXT',
              name: 'name_mi',
              placeholder: 'Введите наименование средства измерения или марку',
              colWidth: '--col_8',
            },
            {
              label: 'Заводской номер',
              type: 'TEXT',
              name: 'factory_number_mi',
              placeholder: 'Введите инвентарный номер',
              colWidth: '--col_4',
            },
          ],
          [
            {
              label: 'Инвентарный номер',
              type: 'TEXT',
              name: 'inventory_number_mi',
              placeholder: 'Введите инвентарный номер',
              colWidth: '--col_4',
            },
            {
              label: 'Серия/Номер свидетельства о поверке',
              type: 'TEXT',
              name: 'certificate_mi',
              placeholder: 'Введите серию/номер свидетельства о поверке',
              colWidth: '--col_4',
            },
            {
              label: 'Статус поверки',
              type: 'SELECT',
              name: 'status_mi',
              options: [
                {
                  id: 1,
                  name: 'Test 1',
                },
                {
                  id: 2,
                  name: 'Test 2',
                },
              ],
              colWidth: '--col_4',
            },
          ],
        ]}
        isLoading={true}
        isDisabled={false}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default MeasuringInstrumentsSearchFrom;
