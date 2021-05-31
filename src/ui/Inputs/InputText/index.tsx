import React from 'react';
import clsn from 'classnames';
import { ClearIcon } from 'ui/IconsSvg';
import { InputTextProps } from './types';
import sts from './styles.module.scss';

const InputText: React.FC<InputTextProps> = ({
  id,
  name,
  type,
  label,
  placeholder,
  value,
  startIcon,
  endIcon,
  сontainerClassName,
  validateText,
  onChange,
  onClearInput,
  onClickStartIcon,
  onClickEndIcon,
}): React.ReactElement => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange && onChange(event);
    },
    [onChange],
  );

  const handleClickStartIcon = React.useCallback((): void => {
    if (Boolean(startIcon) && onClickStartIcon) {
      onClickStartIcon();
    }
  }, [startIcon, onClickStartIcon]);

  const handleClickEndIcon = React.useCallback((): void => {
    if (Boolean(startIcon) && onClickEndIcon) {
      onClickEndIcon();
    }
  }, [endIcon, onClickEndIcon]);

  const handleClickClearInput = React.useCallback(() => {
    onClearInput && onClearInput(name);
  }, [name]);

  return (
    <div className={clsn(sts.сontainer, сontainerClassName)}>
      {Boolean(label) && (
        <label htmlFor={name} title={label} className={sts.inputLabel}>
          {label}
        </label>
      )}
      <div
        className={clsn(sts.input, {
          [sts.input__error]: Boolean(validateText),
        })}
      >
        {Boolean(startIcon) && (
          <div className={sts.input__icon} onClick={handleClickStartIcon}>
            <span
              className={clsn(sts.input__icon_start, {
                [sts.cursor]: handleClickStartIcon,
              })}
            >
              {startIcon}
            </span>
          </div>
        )}
        <div className={sts.input__wrapper}>
          <input
            ref={inputRef}
            id={id}
            name={name}
            value={value}
            placeholder={placeholder}
            type={type}
            autoComplete="false"
            className={sts.input__wrapper_element}
            onChange={handleChange}
          />
        </div>
        {Boolean(value) && (
          <div className={sts.input__icon} onClick={handleClickClearInput}>
            <span className={sts.input__icon_clear}>
              <ClearIcon />
            </span>
          </div>
        )}
        {Boolean(endIcon) && (
          <div className={sts.input__icon} onClick={handleClickEndIcon}>
            <span className={sts.input__icon_end}>{startIcon}</span>
          </div>
        )}
      </div>
      {validateText ? (
        <div className={sts.error_label}>{validateText}</div>
      ) : null}
    </div>
  );
};

export default InputText;
