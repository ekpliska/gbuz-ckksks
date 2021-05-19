import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DictionariesState } from './state';

const initialState: DictionariesState = {
  equipment_categories: [],
  equipment_functions: [],
  placement_types: [],
  type_owns: [],
  test_groups: [],
  sample_categories: [],
  document_types: [],
  posts: [],
  organizations: [],
};

export const dictionariesSlice = createSlice({
  name: 'dictionaries',
  initialState,
  reducers: {
    setDictionaries(state: DictionariesState, { payload }: PayloadAction<DictionariesState>) {
      state.equipment_categories = payload.equipment_categories;
      state.equipment_functions = payload.equipment_functions;
      state.placement_types = payload.placement_types;
      state.type_owns = payload.type_owns;
      state.test_groups = payload.test_groups;
      state.sample_categories = payload.sample_categories;
      state.document_types = payload.document_types;
      state.posts = payload.posts;
      state.organizations = payload.organizations;
    },
  },
});

export const { setDictionaries } = dictionariesSlice.actions;

export default dictionariesSlice.reducer;