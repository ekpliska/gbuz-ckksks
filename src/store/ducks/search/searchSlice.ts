import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EquipmentEntity } from 'models/equipments';
import { LoadingState } from 'store/loadingState';
import { SelectValue } from 'ui/Inputs/Select/types';
import { SearchState } from './state';

const initialState: SearchState = {
  fields: [],
  statusLoading: LoadingState.NEVER,
};

interface FieldPayload {
  entity: EquipmentEntity;
  name: string;
  value: string | number | SelectValue | null;
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchField(
      state: SearchState,
      { payload }: PayloadAction<FieldPayload>,
    ) {
      const { entity, name, value } = payload;
      const indexFields = state.fields.findIndex((f) => f.entity === entity);

      if (indexFields >= 0) {
        const updFieldValues = {
          ...state.fields[indexFields],
          values: { ...state.fields[indexFields].values, [name]: value },
        };
        state.fields = [
          ...state.fields.slice(0, indexFields),
          updFieldValues,
          ...state.fields.slice(indexFields + 1),
        ];
      } else {
        state.fields = [...state.fields, { entity, values: { [name]: value } }];
      }
    },
    resetSearchFields(
      state: SearchState,
      { payload }: PayloadAction<EquipmentEntity>,
    ) {
      const indexFields = state.fields.findIndex((f) => f.entity === payload);
      state.fields = [
        ...state.fields.slice(0, indexFields),
        ...state.fields.slice(indexFields + 1),
      ];
    },
  },
  extraReducers: {},
});

export const { setSearchField, resetSearchFields } = searchSlice.actions;

export default searchSlice.reducer;
