import React from 'react';
import { useDispatch } from 'react-redux';
import { EquipmentEntity, EmployeesModel } from 'models/equipments';
import Filter from 'ui/Filter';
import { Field } from 'store/ducks/search/state';
import { setSearchFields } from 'store/ducks/search/searchSlice';
import { SearchFormProps } from '../types';

const initialValues: Field = {
  lastname_e: '',
  firstname_e: '',
  middlename_e: '',
  document_e: '',
};

const EmployeesSearchFrom: React.FC<
  SearchFormProps<EmployeesModel>
> = (): React.ReactElement => {
  const dispatch = useDispatch();

  const handleSubmit = React.useCallback((values) => {
    dispatch(setSearchFields({
      entity: EquipmentEntity.employee,
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
              label: 'Фамилия',
              type: 'TEXT',
              name: 'lastname_e',
              placeholder: 'Введите фамилию сотрудника',
              colWidth: '--col_4',
            },
            {
              label: 'Имя',
              type: 'TEXT',
              name: 'firstname_e',
              placeholder: 'Введите имя сотрудника',
              colWidth: '--col_2',
            },
            {
              label: 'Отчество',
              type: 'TEXT',
              name: 'middlename_e',
              placeholder: 'Введите отчество сотрудника',
              colWidth: '--col_3',
            },
            {
              label: 'Номер трудового договора',
              type: 'TEXT',
              name: 'document_e',
              placeholder: 'Введите номер трудового договора',
              colWidth: '--col_3',
            },
          ],
        ]}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default EmployeesSearchFrom;
