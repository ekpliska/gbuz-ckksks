import React from 'react';
import clsn from 'classnames';
import { ButtonProps } from './types';
import sts from './styles.module.scss';

const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  type,
  color,
  tooltip,
  classNameContainer,
  classNameButton,
  disabled,
  icon,
  onClick,
}): React.ReactElement => {
  const buttonClassName = clsn(
    sts.button,
    sts[`button_${variant || 'outlined'}`],
    sts[`${color ?? 'default'}`],
    classNameButton,
    {
      [sts.disabled]: disabled,
    },
  );

  const handleButtonClick = React.useCallback(
    (event: React.MouseEvent) => {
      if (!disabled && onClick) {
        onClick(event);
      }
      return;
    },
    [disabled, onClick],
  );

  return (
    <div className={clsn(sts.container, classNameContainer)}>
      <button
        data-tooltip={tooltip}
        type={type}
        className={buttonClassName}
        disabled={disabled}
        onClick={handleButtonClick}
      >
        {Boolean(icon) && <span className={sts.button__icon}>{icon}</span>}
        <span>{children}</span>
      </button>
    </div>
  );
};

export default Button;
