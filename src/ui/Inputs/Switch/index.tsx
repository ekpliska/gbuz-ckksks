import React from 'react';
import clsn from 'classnames';
import { SwitchProps } from './types';
import sts from './styles.module.scss';

const Switch: React.FC<SwitchProps> = ({
  id,
  name,
  checked,
  disabled,
  classNameContainer,
  onChange,
}): React.ReactElement => {
  
  const taggleSwitch = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <div className={clsn(sts.switchContainer, classNameContainer)}>
      <label htmlFor={name} className={sts.switch}>
        <input
          id={id}
          name={name}
          type='checkbox'
          className={sts.switch__input}
          checked={checked}
          disabled={disabled}
          onChange={taggleSwitch}
        />
        <span className={sts.switch__toggle}></span>
      </label>
    </div>
  );
};

export default Switch;
