import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchDictionaries } from 'api/dictionaries';
import { setDictionaries } from './dictionariesSlice';
import { DictionariesState } from './state';
import actionsType from './constants';

export const fetchDictionaryList = createAsyncThunk(
  actionsType.SET_DICTIONARIES,
  async (_, { dispatch }) => {
    try {
      const { data } = await fetchDictionaries();
      dispatch(setDictionaries(data as DictionariesState));
    } catch (error) {
      // TODO: выводить notifications об ошибке загрузки справочников
    }
  },
);
