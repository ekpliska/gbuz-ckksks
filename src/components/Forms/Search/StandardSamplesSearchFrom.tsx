import React from 'react';
import { useDispatch } from 'react-redux';
import { EquipmentEntity, StandardSampleModel } from 'models/equipments';
import Filter from 'ui/Filter';
import { Field } from 'store/ducks/search/state';
import { setSearchFields } from 'store/ducks/search/searchSlice';
import { SearchFormProps } from '../types';

const initialValues: Field = {
  name_ss: '',
  document_ss: '',
  shelf_life_ss: '',
  manufacturer_ss: '',
};

const StandardSamplesSearchFrom: React.FC<
  SearchFormProps<StandardSampleModel>
> = (): React.ReactElement => {
  const dispatch = useDispatch();

  const handleSubmit = React.useCallback((values) => {
    dispatch(setSearchFields({
      entity: EquipmentEntity.standardSample,
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
              label: 'Наименование стандартного образца',
              type: 'TEXT',
              name: 'name_ss',
              placeholder: 'Введите наименование стандартного образца',
              colWidth: '--col_5',
            },
            {
              label: 'Нормативный документ',
              type: 'TEXT',
              name: 'document_ss',
              placeholder: 'Введите номер нормативного документа',
              colWidth: '--col_3',
            },
            {
              label: 'Срок годности',
              type: 'DATETIME',
              name: 'shelf_life_ss',
              placeholder: 'мм.гггг',
              colWidth: '--col_2',
              dateFormat: 'month',
            },
            {
              label: 'Изготовитель',
              type: 'SELECT',
              name: 'manufacturer_ss',
              colWidth: '--col_2',
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
            },
          ],
        ]}
        onSubmit={handleSubmit} />
    </>
  );
};

export default StandardSamplesSearchFrom;
