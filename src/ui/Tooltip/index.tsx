import React from 'react';
import clsn from 'classnames';
import TooltipPopup from './TooltipPopup';
import { TooltipProps, ITooltipPopupStyle, PlacementTypes } from './types';
import sts from './styles.module.scss';

const Tooltip: React.FC<TooltipProps> = ({
  title,
  placement = PlacementTypes.BOTTOM,
  children,
  classNameContainer,
}): React.ReactElement => {
  const [isVisible, setIsVisible] = React.useState<boolean>(false);
  const [stylePopup, setStylePopup] = React.useState<
    ITooltipPopupStyle | undefined
  >(undefined);
  const divContainerRef = React.useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    const position = divContainerRef.current?.getBoundingClientRect();
    if (position) {
      let initialCoords: Partial<ITooltipPopupStyle> = {};
      if (placement === PlacementTypes.TOP) {
        initialCoords = {
          bottom: window.innerHeight - position.top + 10,
          left: position.left + position.width / 2,
        };
      } else if (placement === PlacementTypes.RIGTH) {
        initialCoords = {
          top: position.top - position.height + 10,
          left: position.right + position.width,
        };
      } else if (placement === PlacementTypes.LEFT) {
        initialCoords = {
          top: position.top - position.height + 10,
          left: position.left - position.width,
        };
      } else {
        initialCoords = {
          top: position.top + position.height + 10,
          left: position.left + position.width / 2,
        };
      }
      setStylePopup(initialCoords);
      setIsVisible(true);
    }
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  return (
    <div
      ref={divContainerRef}
      className={clsn(sts.tooltipContainer, classNameContainer)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {isVisible && (
        <TooltipPopup
          title={title}
          placement={placement}
          initialStyle={stylePopup}
        />
      )}
    </div>
  );
};

export default Tooltip;
