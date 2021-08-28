import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EquipmentEntity } from 'models/equipments';
import { LoadingState } from 'store/loadingState';
import { FieldSearch, SearchState } from './state';

const initialState: SearchState = {
  forms: [],
  statusLoading: LoadingState.NEVER,
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchFields(
      state: SearchState,
      { payload }: PayloadAction<FieldSearch>,
    ) {
      const { entity } = payload;
      const indexEntity = state.forms.findIndex((f) => f.entity === entity);

      if (indexEntity >= 0) {
        state.forms = [
          ...state.forms.slice(0, indexEntity),
          payload,
          ...state.forms.slice(indexEntity + 1),
        ];
      } else {
        state.forms = [...state.forms, payload];
      }
    },
    resetSearchFields(
      state: SearchState,
      { payload }: PayloadAction<EquipmentEntity>,
    ) {
      const indexFields = state.forms.findIndex((f) => f.entity === payload);
      state.forms = [
        ...state.forms.slice(0, indexFields),
        ...state.forms.slice(indexFields + 1),
      ];
    },
  },
  extraReducers: {},
});

export const { setSearchFields, resetSearchFields } = searchSlice.actions;

export default searchSlice.reducer;
