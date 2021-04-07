import React from 'react';
import clsn from 'classnames';
import { FileUploaderProps } from './types';
import sts from './styles.module.scss';

const FileUploader: React.FC<FileUploaderProps> = ({
  name,
  label,
  disabled,
  icon,
  color = 'blue',
  classNameLabel,
  classNameContainer,
  onChange,
}): React.ReactElement => {

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <div className={clsn(sts.fileUploader, classNameContainer)}>
      <label
        htmlFor={name}
        className={clsn(sts.fileUploader__label, classNameLabel, sts[color], {
          [sts['--disabled']]: disabled,
        })}
      >
        <input
          name={name}
          type='file'
          className={sts.fileUploader__input}
          disabled={disabled}
          onChange={handleOnChange}
        />
        {icon && <span className={sts.fileUploader__label_icon}>{icon}</span>}
        <span className={sts.fileUploader__label_text}>{label}</span>
      </label>
    </div>
  );
};

export default FileUploader;
