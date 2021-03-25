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
      setStylePopup(() => {
        // const left = (position.left + (position.width / 2)) - dimensions.width / 2;
        const left = position.left + position.width / 2;
        const keyPosition: 'top' | 'bottom' =
          position.top < window.innerHeight / 2 ? 'top' : 'bottom';

        return {
          left: left,
          [keyPosition]:
            keyPosition === 'top'
              ? position.top + position.height + 10
              : window.innerHeight - position.top + 10,
        };
      });
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
