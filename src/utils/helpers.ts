import moment from 'moment';
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
