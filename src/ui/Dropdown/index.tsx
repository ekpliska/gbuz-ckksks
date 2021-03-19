import React from 'react';
import clsn from 'classnames';
import { KebabMenuIcon } from 'ui/IconsSvg';
import DropdownPopup from './DropdownPopup';
import { DropdownProps, ICoords } from './types';
import sts from './styles.module.scss';

const Dropdown: React.FC<DropdownProps> = ({
  overlay,
  children,
}): React.ReactElement => {
  const [coords, setCoords] = React.useState<ICoords | null>(null);
  const [isOpen, setOpen] = React.useState<boolean>(false);
  const actionRef = React.useRef<HTMLButtonElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    const path = event.composedPath && event.composedPath();
    if (actionRef.current && !path.includes(actionRef.current)) {
      setOpen(false);
    }
  };

  const updatePopupCoords = () => {
    const position = actionRef.current?.getBoundingClientRect();
    if (position) {
      setCoords({
        top: position.bottom + window.screenY + 3,
        left: position.x + position?.width / 3,
      });
    }
    setOpen((prevState) => !prevState);
  };

  const toggleClick = () => {
    updatePopupCoords();
  };

  React.useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div className={sts.dropdownWrapper}>
      <div className={clsn(sts.dropdown, { [sts['--is-open']]: isOpen })}>
        <div className={sts.dropdown__label}>
          {children}
        </div>
        <div className={sts.dropdown__action}>
          <button
            ref={actionRef}
            className={sts.dropdown__action_button}
            onClick={toggleClick}
          >
            <KebabMenuIcon />
          </button>
        </div>
      </div>
      {isOpen && coords && (
        <DropdownPopup overlay={overlay} updatePopupCoords={updatePopupCoords} {...coords} />
      )}
    </div>
  );
};

export default Dropdown;
