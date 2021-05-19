import {
  DocumentTypeModel,
  EquipmentCategoryModel,
  EquipmentFunctionModel,
  OrganizationModel,
  PlacementTypeModel,
  PostModel,
  SampleCategoryModel,
  TestGroupModel,
  TypeOwnModel,
} from 'models/dictionaries';

export interface DictionariesState {
  equipment_categories: EquipmentCategoryModel[];
  equipment_functions: EquipmentFunctionModel[];
  placement_types: PlacementTypeModel[];
  type_owns: TypeOwnModel[];
  test_groups: TestGroupModel[];
  sample_categories: SampleCategoryModel[];
  document_types: DocumentTypeModel[];
  posts: PostModel[];
  organizations: OrganizationModel[];
};