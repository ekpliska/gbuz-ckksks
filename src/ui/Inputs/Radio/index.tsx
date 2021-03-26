import React from 'react';
import clsn from 'classnames';
import { RadioProps } from './types';
import sts from './styles.module.scss';

const Radio: React.FC<RadioProps> = ({
  id,
  name,
  label,
  value,
  radioValue,
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
    <div className={clsn(sts.radio, classNameContainer)}>
      <input
        id={id}
        name={name}
        type='radio'
        value={value}
        checked={Boolean(value) && String(value) === String(radioValue)}
        disabled={disabled}
        onChange={handleChange}
        className={sts.radio__input}
      />
      <label htmlFor={name} className={sts.radio__label}>
        {label}
      </label>
    </div>
  );
};

export default Radio;
