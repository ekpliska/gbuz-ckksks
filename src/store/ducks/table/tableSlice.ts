import {
  ActionReducerMapBuilder,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { EquipmentEntity } from 'models/equipments';
import { LoadingState } from 'store/loadingState';
import { TableState } from './state';
import { fetchTableData } from './thunks';

const initialState: TableState = {
  entity: null,
  items: undefined,
  pagination: {
    page_size: 0,
    page_number: 0,
  },
  order: null,
  loadingStatus: LoadingState.NEVER,
  error: [],
};

export const tableSlice = createSlice({
  name: 'table',
  initialState,
  reducers: {
    setTableData(state: TableState, { payload }: PayloadAction<Partial<TableState>>) {
      state.items = payload.items;
      state.pagination = payload.pagination;
    },
    setTableEntity(state: TableState, { payload }: PayloadAction<EquipmentEntity>) {
      state.entity = payload;
    },
    setTableError(state: TableState, { payload }: PayloadAction<TableState['error']>) {
      state.error = payload;
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<TableState>) => {
    builder.addCase(fetchTableData.pending, (state) => {
      state.loadingStatus = LoadingState.LOADING;
    });
    builder.addCase(fetchTableData.fulfilled, (state) => {
      state.loadingStatus = LoadingState.LOADED;
    });
    builder.addCase(fetchTableData.rejected, (state) => {
      state.loadingStatus = LoadingState.ERROR;
    });
  },
});

export const {
  setTableData,
  setTableEntity,
  setTableError,
} = tableSlice.actions;

export default tableSlice.reducer;
