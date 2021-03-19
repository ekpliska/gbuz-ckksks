import React from 'react';
import ReactDOM from 'react-dom';
import sts from './styles.module.scss';
import { DropdownPopupProps } from './types';

const DropdownPopup: React.FC<DropdownPopupProps> = ({
  overlay,
  left,
  top,
  updatePopupCoords,
}): React.ReactElement => {
  React.useEffect(() => {
    window.addEventListener('resize', updatePopupCoords);
    return () => window.removeEventListener('resize', updatePopupCoords);
  }, []);

  return (
    <>
      {ReactDOM.createPortal(
        <div className={sts.dropdownPopupWrapper}>
          <div>
            <div className={sts.dropdownPopup} style={{ left, top }}>
              {overlay}
            </div>
          </div>
        </div>,
        document.body,
      )}
    </>
  );
};

export default DropdownPopup;
