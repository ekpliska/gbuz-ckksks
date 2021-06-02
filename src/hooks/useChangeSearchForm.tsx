import { useDispatch } from 'react-redux';
import { SelectValue } from 'ui/Inputs/Select/types';
import { EquipmentEntity } from 'models/equipments';
import {
  resetSearchFields,
  setSearchField,
} from 'store/ducks/search/searchSlice';
import { fetchTableData } from 'store/ducks/table/thunks';

interface useChangeSearchFormProps {
  handleChangeInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeSelect: (value: SelectValue | null, inputName: string) => void;
  handleClearInput: (fieldKey: string) => void;
  handleResetForm: () => void;
}

export const useChangeSearchForm = (
  entity: EquipmentEntity,
): useChangeSearchFormProps => {
  const dispatch = useDispatch();

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    dispatch(setSearchField({ entity, name, value }));
  };

  const handleChangeSelect = (value: SelectValue | null, inputName: string) => {
    dispatch(setSearchField({ entity, name: inputName, value }));
  };

  const handleClearInput = (fieldKey: string) => {
    dispatch(setSearchField({ entity, name: fieldKey, value: null }));
  };

  const handleResetForm = () => {
    dispatch(resetSearchFields(entity));
    dispatch(fetchTableData({ entity }));
  };

  return {
    handleChangeInput,
    handleChangeSelect,
    handleClearInput,
    handleResetForm,
  };
};
