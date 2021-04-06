import React from 'react';
import clsn from 'classnames';
import { SwitchProps } from './types';
import sts from './styles.module.scss';

const Switch: React.FC<SwitchProps> = ({
  id,
  name,
  labels,
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
      {labels?.length && (
        <span
          className={clsn(sts.switchContainer__label, {
            [sts['--off']]: checked,
          })}
        >
          {labels[0]}
        </span>
      )}
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
      {labels?.length && (
        <span
          className={clsn(sts.switchContainer__label, {
            [sts['--off']]: !checked,
          })}
        >
          {labels[1]}
        </span>
      )}
    </div>
  );
};

export default Switch;
