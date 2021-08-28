import React from 'react';
import { useDispatch } from 'react-redux';
import Filter from 'ui/Filter';
import { Field } from 'store/ducks/search/state';
import { setSearchFields } from 'store/ducks/search/searchSlice';
import { EquipmentEntity, TestEquipmentModel } from 'models/equipments';
import { SearchFormProps } from '../types';

const initialValues: Field = {
  name_te: '',
  factory_number_te: '',
  inventory_number_te: '',
  attestation_document_te: '',
  status_te: '',
};

const TestEquipmentsSearchFrom: React.FC<
  SearchFormProps<TestEquipmentModel>
> = (): React.ReactElement => {
  const dispatch = useDispatch();

  const handleSubmit = React.useCallback((values) => {
    dispatch(setSearchFields({
      entity: EquipmentEntity.testEquipment,
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
              label: 'Наименование испытательного оборудования / марка',
              type: 'TEXT',
              name: 'name_te',
              placeholder: 'Введите наименование испытательного оборудования или марку',
              colWidth: '--col_8',
            },
            {
              label: 'Заводской номер',
              type: 'TEXT',
              name: 'factory_number_te',
              placeholder: 'Введите заводской номер',
              colWidth: '--col_4',
            },
          ],
          [
            {
              label: 'Инвентарный номер',
              type: 'TEXT',
              name: 'inventory_number_te',
              placeholder: 'Введите инвентарный номер',
              colWidth: '--col_4',
            },
            {
              label: 'Номер документа об аттестации',
              type: 'TEXT',
              name: 'certificate_te',
              placeholder: 'Введите номер документа об аттестации',
              colWidth: '--col_4',
            },
            {
              label: 'Статус поверки',
              type: 'SELECT',
              name: 'status_te',
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

export default TestEquipmentsSearchFrom;
