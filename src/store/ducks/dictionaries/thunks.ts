import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchDictionaries } from 'api/services/dictionaries';
import { setDictionaries } from './dictionariesSlice';
import { DictionariesState } from './state';
import actionsTypes from './constants';

export const fetchDictionaryList = createAsyncThunk(
  actionsTypes.SET_DICTIONARIES,
  async (_, { dispatch }) => {
    try {
      const { data } = await fetchDictionaries();
      dispatch(setDictionaries(data as DictionariesState));
    } catch (error) {
      // TODO: выводить notifications об ошибке загрузки справочников
    }
  },
);
