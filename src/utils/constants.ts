export const LOCAL_STORAGE_TOKEN = 'access_token';
export const LOCAL_STORAGE_REFRESH_TOKEN = 'refresh_token';

export const DATE_FORMAT_UI = {
  FULL_DATE: 'DD.MM.YYYY HH:mm',
  ONLY_DATE: 'DD.MM.YYYY',
  ONLY_TIME: 'HH:mm',
  ONLY_YEAR: 'YYYY',
};

export type TDateTimeFormat =
  | 'DD.MM.YYYY'
  | 'DD.MM.YYYY HH:mm'
  | 'YYYY-MM-DDThh:mm:ss'
  | 'YYYY'
  | 'MM.YYYY';
