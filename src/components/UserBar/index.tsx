import React from 'react';
import clsn from 'classnames';
import { LogoutIcon } from 'ui/IconsSvg';
import { UserBarProps } from './types';
import sts from './styles.module.scss';

const UserBar: React.FC<UserBarProps> = ({ userInfo }): React.ReactElement => {
  const [isVisible, setIsVisible] = React.useState<boolean>(false);
  const divContainerRef = React.useRef<HTMLDivElement>(null);

  const handleClick = React.useCallback(() => {
    setIsVisible((prevState) => !prevState);
  }, [setIsVisible]);

  const handleOutsideClick = React.useCallback((event: MouseEvent): void => {
    if (!divContainerRef.current?.contains(event?.target as Node) && document.contains(event?.target as Node)) {
      setIsVisible(false);
    }
  }, [divContainerRef, setIsVisible]);

  React.useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return (): void => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div ref={divContainerRef} className={sts.userBar} onClick={handleClick}>
      <div className={sts.userBar__icon}>
        {String(userInfo.lastname).charAt(0) ?? 'N/'}
        {String(userInfo.firstname).charAt(0) ?? 'A'}
      </div>
      <div
        className={clsn(sts.userBar__dropdown, {
          [sts.visible]: isVisible,
        })}
      >
        <ul className={sts.dropdownMenu}>
          <li className={sts.dropdownMenu__item}>Профиль</li>
          <li className={sts.dropdownMenu__item}>
            Выйти <LogoutIcon fill='#1A1A1A' />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserBar;
