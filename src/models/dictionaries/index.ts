export interface EquipmentCategoryModel {
  id?: number;
  name: string;
};

export interface EquipmentFunctionModel {
  id?: number;
  name: string;
  category: EquipmentCategoryModel;
};

export interface PlacementTypeModel {
  id?: number;
  name: string;
};

export interface TypeOwnModel {
  id?: number;
  name: string;
};

export interface TestGroupModel {
  id?: number;
  name: string;
};

export interface SampleCategoryModel {
  id?: number;
  name: string;
};

export interface DocumentTypeModel {
  id?: number;
  name: string;
};

export interface DocumentModel {
  id?: number;
  name: DocumentTypeModel;
  number?: string;
  series?: string;
  date_from?: string;
  date_to?: string;
};

export interface PostModel {
  id?: number;
  name: string;
};

export interface OrganizationModel {
  id?: number;
  name: string;
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