import moment from 'moment';
import { cloneDeep } from 'lodash';
import { Field } from 'store/ducks/search/state';
import { DATE_FORMAT_UI } from './constants';

export function renderDateFormat(
  date: moment.MomentInput,
  format: string,
): string {
  if (!date) {
    return '-';
  }
  const isFormatKey = Object.keys(DATE_FORMAT_UI).includes(format);
  if (!isFormatKey) {
    return moment(date).format(DATE_FORMAT_UI.FULL_DATE);
  }
  return moment(date).format(format);
}

export function normalizedObject(objectParams: Field | null | undefined): Field | null | undefined {
  const cloneObject = cloneDeep(objectParams);
  for (const objKey in cloneObject) {
    if (typeof cloneObject[objKey] === 'undefined' || cloneObject[objKey] === null) {
      delete cloneObject[objKey];
    }
  }

  return cloneObject;
}
