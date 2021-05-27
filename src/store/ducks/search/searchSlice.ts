import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoadingState } from 'store/loadingState';
import { SearchState } from './state';

const initialState: SearchState = {
  entity: null,
  fields: null,
  statusLoading: LoadingState.NEVER,
  error: [],
};

interface Input {
  name: string;
  value: string | number | { id: number, name: string } | null;
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchField(state: SearchState, { payload }: PayloadAction<Input>) {
      state.fields = {
        ...state.fields,
        [payload.name]: payload.value,
      };
    },
    setSearchEntity(state: SearchState, { payload }: PayloadAction<SearchState['entity']>) {
      state.entity = payload;
    },
    setSearchError(state: SearchState, { payload }: PayloadAction<SearchState['error']>) {
      state.error = payload;
    },
    resetSearchFields(state: SearchState) {
      state.fields = null;
      state.statusLoading = LoadingState.NEVER;
      state.error = [];
    },
  },
  extraReducers: {},
});

export const {
  setSearchField,
  setSearchEntity,
  setSearchError,
  resetSearchFields,
} = searchSlice.actions;

export default searchSlice.reducer;