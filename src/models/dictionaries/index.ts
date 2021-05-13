export interface BaseDictionaryModel {
  id?: number;
  name: string;
};

export interface EquipmentCategoryModel extends BaseDictionaryModel {
  data: string;
};

export interface EquipmentFunctionModel extends BaseDictionaryModel {
  category: EquipmentCategoryModel;
};

export interface PlacementTypeModel extends BaseDictionaryModel {
  data: string;
};

export interface TypeOwnModel extends BaseDictionaryModel {
  data: string;
};

export interface TestGroupModel extends BaseDictionaryModel {
  data: string;
};

export interface SampleCategoryModel extends BaseDictionaryModel {
  data: string;
};

export interface DocumentTypeModel extends BaseDictionaryModel {
  number?: string;
  series?: string;
  dateFrom?: string;
  dateTo?: string;
};

export interface PostModel extends BaseDictionaryModel {
  data: string;
};

export interface OrganizationModel extends BaseDictionaryModel {
  address: string,
  addressLegal: string,
  addressSampling: string,
  contactName: string,
  leaderName: string,
  phone: string,
  email: string,
  fax: string,
  country: string,
};