import React from 'react';
import { BellIcon } from 'ui/IconsSvg';
import { NotificationBarProps } from './types';
import NotificationDropdown from './NotificationDropdown';
import sts from './styles.module.scss';

const NotificationBar: React.FC<NotificationBarProps> = (): React.ReactElement => {
  const [isVisible, setIsVisible] = React.useState<boolean>(false);
  const divContainerRef = React.useRef<HTMLDivElement>(null);

  const handleClick = React.useCallback(() => {
    setIsVisible(prevState => !prevState);
  }, [setIsVisible]);

  const handleOutsideClick = React.useCallback((event: MouseEvent): void => {
    if (!divContainerRef.current?.contains(event?.target as Node) && document.contains(event?.target as Node)) {
      setIsVisible(false);
    }
  }, [setIsVisible]);

  React.useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return (): void => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div ref={divContainerRef} className={sts.container} onClick={handleClick}>
      <div className={sts.notification}>
        <BellIcon width='22' height='22' fill='#086FA1' />
        <span className={sts.notification__badge}></span>
      </div>
      <NotificationDropdown isVisible={isVisible} />
    </div>
  );
};

export default NotificationBar;
