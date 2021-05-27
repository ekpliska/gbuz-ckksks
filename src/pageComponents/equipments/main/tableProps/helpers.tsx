import { DocumentModel } from 'models/dictionaries';
import React from 'react';
import { VerificationInfoIcon } from 'ui/IconsSvg';
import Tooltip from 'ui/Tooltip';
import { DATE_FORMAT_UI } from 'utils/constants';
import { renderDateFormat } from 'utils/helpers';

export const renderTooltip = (
  documentData: DocumentModel,
  styles: { readonly [key: string]: string },
): React.ReactNode => {
  const { name, series, number, date_from, date_to } = documentData;
  return (
    <Tooltip
      title={
        <div className={styles.tooltip}>
          <span>{name.name || '-'}</span>
          <span>
            {series || '-'} - {number || '-'}
          </span>
          <span>
            {renderDateFormat(date_from, DATE_FORMAT_UI.FULL_DATE)} -{' '}
            {renderDateFormat(date_to, DATE_FORMAT_UI.FULL_DATE)}
          </span>
        </div>
      }
    >
      <div className={styles.documentDataIcon}>
        <VerificationInfoIcon width="11" height="11" fill="#FFF" />
      </div>
    </Tooltip>
  );
};
