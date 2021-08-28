import React from 'react';
import { useDispatch } from 'react-redux';
import { EquipmentEntity, AuxiliaryEquipmentModel } from 'models/equipments';
import Filter from 'ui/Filter';
import { Field } from 'store/ducks/search/state';
import { setSearchFields } from 'store/ducks/search/searchSlice';
import { SearchFormProps } from '../types';

const initialValues: Field = {
  name_ae: '',
  inventory_number_ae: '',
  factory_number_ae: '',
};

const AuxiliaryEquipmentsSearchFrom: React.FC<
  SearchFormProps<AuxiliaryEquipmentModel>
> = (): React.ReactElement => {
  const dispatch = useDispatch();

  const handleSubmit = React.useCallback((values) => {
    dispatch(setSearchFields({
      entity: EquipmentEntity.auxiliaryEquipment,
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
              label: 'Наименование вспомогательного оборудования / марка',
              type: 'TEXT',
              name: 'name_ae',
              placeholder: 'Введите наименование вспомогательного оборудования или марку',
              colWidth: '--col_6',
            },
            {
              label: 'Инвентарный номер',
              type: 'TEXT',
              name: 'inventory_number_ae',
              placeholder: 'Введите инвентарный номер',
              colWidth: '--col_3',
            },
            {
              label: 'Заводской номер',
              type: 'TEXT',
              name: 'factory_number_ae',
              placeholder: 'Введите заводской номер',
              colWidth: '--col_3',
            },
          ],
        ]}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default AuxiliaryEquipmentsSearchFrom;
