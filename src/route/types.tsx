import { IconsSvgProps } from 'ui/IconsSvg/types';

export enum KeyPage {
  ROOT = 'root',
  APP_ROOT = 'app_root',
  APP_PAGE = 'app_page',
};

export enum ParentPages {
  ROOT = '/',
  LOGOUT = 'logout',
  DOCUMENTS = 'documents',
  EQUIPMENTS = 'equipments',
  USERS_ALL = 'users-all',
  DICTIONARIES = 'dictionaries',
  SETTINGS = 'settings',
};

export enum ChildPages {
  PROGRAMMS = 'programms',
  REFERRALS = 'referrals',
  PROTOCOLS = 'protocols',
  MEASURING_INSTRUMENTS = 'measuring-instruments',
  TEST_EQUIPMENTS = 'test-equipments',
  AUXILIARY_EQUIPMENT = 'auxiliary-equipment',
  STANDARD_SAMPLES = 'standard-samples',
  INDUSTRIAL_PREMISES = 'industrial-premises',
  EMPLOYEES = 'employees',
  USERS = 'users',
  ROLES = 'roles',
  MEDICINES = 'medicines',
  DISCHARGE_FORMS = 'discharge-forms',
  QUALITY_INDICATORS = 'quality-indicators',
  DESTINATION_EQUIPMENT = 'destination-equipment',
  UNITS = 'units',
  ORGANIZATIONS = 'organizations',
  LABORATORY = 'laboratory',
  TYPICAL_FORMS = 'typical_forms',
};

export interface IHeadingSettings {
  heading: string;
  fullHeading?: string;
  iconHeading?: React.ReactNode;
  isExportPdf?: boolean;
  isExportExcel?: boolean;
  isCreate?: boolean;
  isTooltips?: boolean;
};

export interface IRouteItem {
  id: ParentPages | ChildPages;
  path: string;
  exact?: boolean;
  // eslint-disable-next-line
  Component?: any;
  headingSettings: IHeadingSettings;
};

export interface IRoutes extends IRouteItem {
  childRoutes?: IRouteItem[];
};

export interface PrivateRouteProps extends IRoutes {
  isAuthenticated: boolean;
};

export const iconProps: IconsSvgProps = {
  width: '14',
  height: '14',
  fill: '#FFF',
};
