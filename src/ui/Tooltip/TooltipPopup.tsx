import React from 'react';
import ReactDOM from 'react-dom';
import clsn from 'classnames';
import { TooltipPopupProps, PlacementTypes } from './types';
import sts from './styles.module.scss';

const TooltipPopup: React.FC<TooltipPopupProps> = ({
  title,
  placement,
  initialStyle,
}): React.ReactElement => {
  return ReactDOM.createPortal(
    <div
      style={initialStyle}
      className={clsn(sts.tooltipPopup, {
        [sts[placement || PlacementTypes.BOTTOM]]: Boolean(placement),
      })}
    >
      <div className={sts.tooltipPopup__content}>
        <span>{title}</span>
      </div>
    </div>,
    document.body,
  );
};

export default TooltipPopup;
