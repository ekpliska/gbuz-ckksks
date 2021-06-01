import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { MI_Api } from 'api/services/equipments';
import { EquipmentsRequest, EquipmentsResponse } from 'models/api/equipments';
import { ApiError } from 'models/api/api';
import { EquipmentEntity } from 'models/equipments';
import { setTableData, setTableEntity, setTableError } from './tableSlice';
import actionsTypes from './constants';

export interface FetchTableDataProps {
  entity: EquipmentEntity;
  requestParams?: EquipmentsRequest;
}

export const fetchTableData = createAsyncThunk(
  actionsTypes.SET_DATA,
  async (params: FetchTableDataProps, { dispatch }) => {
    try {
      dispatch(setTableEntity(params.entity));
      const { data } = await MI_Api.fetchAllData(params.requestParams);
      const { items } = data as EquipmentsResponse;
      dispatch(setTableData(items));
    } catch (error) {
      const err: AxiosError<ApiError> = error;
      dispatch(setTableError(err.response?.data.errors as string[]));
    }
  },
);
