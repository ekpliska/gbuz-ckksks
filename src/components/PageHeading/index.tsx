import React from 'react';
import Button from 'ui/Button';
import { ExcelIcon, PdfIcon, PlusIcon } from 'ui/IconsSvg';
import { PageHeadingProps } from './types';
import sts from './styles.module.scss';

const PageHeading: React.FC<PageHeadingProps> = ({
  heading,
  fullHeading,
  iconHeading,
  isExportPdf,
  isExportExcel,
  isCreate,
  isTooltips,
  isUploadButton,
  buttonCreateLabel,
  createMethod,
  exportPdfMethod,
  exportExcelMethod,
  uploadFileButton,
}): React.ReactElement => {
  return (
    <div className={sts.pageHeading}>
      <div className={sts.pageHeading__title}>
        {iconHeading && (
          <span className={sts.pageHeading__title_icon}>{iconHeading}</span>
        )}
        <h2>{fullHeading ?? heading}</h2>
      </div>
      {isTooltips && <div className={sts.pageHeading__tooltips}>tooltips</div>}
      {isUploadButton && uploadFileButton?.length && (
        <div className={sts.pageHeading__upload}>
          {uploadFileButton.map((btnComp) => btnComp)}
        </div>
      )}
      {isExportPdf || isExportExcel}
      <div className={sts.pageHeading__exports}>
        {isExportPdf && exportPdfMethod && (
          <Button
            type='button'
            variant='filled'
            icon={<ExcelIcon width='20' height='20' />}
            color='light'
            onClick={exportPdfMethod}
          />
        )}
        {isExportExcel && exportExcelMethod && (
          <Button
            type='button'
            variant='filled'
            icon={<PdfIcon width='20' height='20' />}
            color='light'
            onClick={exportPdfMethod}
          />
        )}
      </div>
      {isCreate && createMethod && (
        <div className={sts.pageHeading__actions}>
          <Button
            type='button'
            variant='outlined'
            icon={<PlusIcon width='13' height='13' />}
            color='default'
            onClick={createMethod}
          >
            {buttonCreateLabel}
          </Button>
        </div>
      )}
    </div>
  );
};

export default PageHeading;
