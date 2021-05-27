import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { MI_Api } from 'api/services/equipments';
import { EquipmentsResponse } from 'models/api/equipments';
import { ApiError } from 'models/api/api';
import { TableSectionEntity } from './state';
import { setTableData, setTableEntity, setTableError } from './tableSlice';
import actionsTypes from './constants';

export const fetchTableData = createAsyncThunk(
  actionsTypes.SET_DATA,
  async (tableEntity: TableSectionEntity, { dispatch }) => {
    try {
      dispatch(setTableEntity(tableEntity));
      const { data } = await MI_Api.fetchAllData();
      const { items } = data as EquipmentsResponse;
      dispatch(setTableData(items));
    } catch (error) {
      const err: AxiosError<ApiError> = error;
      dispatch(setTableError(err.response?.data.errors as string[]));
    }
  },
);
