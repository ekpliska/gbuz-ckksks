import React from 'react';
import clsn from 'classnames';
import { CheckboxProps } from './types';
import sts from './styles.module.scss';

const Checkbox: React.FC<CheckboxProps> = ({
  id,
  name,
  label,
  value,
  disabled,
  onChange,
  classNameContainer,
}): React.ReactElement => {

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <div className={clsn(sts.checkbox, classNameContainer)}>
      <input
        id={id}
        name={name}
        type='checkbox'
        checked={value}
        disabled={disabled}
        onChange={handleChange}
        className={sts.checkbox__input}
      />
      <label htmlFor={name} className={sts.checkbox__label}>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
