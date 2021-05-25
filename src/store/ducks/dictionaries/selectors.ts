import { RootState } from 'store/rootReducer';
import { DictionariesState } from './state';

export const selectorDictionaries = (state: RootState): DictionariesState =>
  state.dictionaries;

export const selectorEquipmentCategories = (
  state: RootState,
): DictionariesState['equipment_categories'] =>
  state.dictionaries.equipment_categories;

export const selectorEquipmentFunctions = (
  state: RootState,
): DictionariesState['equipment_functions'] =>
  state.dictionaries.equipment_functions;

export const selectorPlacementTypes = (
  state: RootState,
): DictionariesState['placement_types'] => state.dictionaries.placement_types;

export const selectorTypeOwns = (
  state: RootState,
): DictionariesState['type_owns'] => state.dictionaries.type_owns;

export const selectorTestGroups = (
  state: RootState,
): DictionariesState['test_groups'] => state.dictionaries.test_groups;

export const selectorSampleCategories = (
  state: RootState,
): DictionariesState['sample_categories'] =>
  state.dictionaries.sample_categories;

export const selectorDocumentTypes = (
  state: RootState,
): DictionariesState['document_types'] => state.dictionaries.document_types;

export const selectorPosts = (state: RootState): DictionariesState['posts'] =>
  state.dictionaries.posts;

export const selectorOrganizations = (
  state: RootState,
): DictionariesState['organizations'] => state.dictionaries.organizations;
