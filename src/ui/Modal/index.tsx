import React from 'react';
import clsn from 'classnames';
import { CloseIcon } from 'ui/IconsSvg';
import ModalPortal from './ModalPortal';
import { ModalProps } from './types';
import sts from './styles.module.scss';

const Modal: React.FC<ModalProps> = ({
  open,
  render,
  backdrop,
  closable = true,
  onClose,
}): React.ReactElement | null => {
  const [visible, setVisible] = React.useState<boolean>(false);
  const backdropRef = React.useRef<HTMLDivElement>(null);

  const handleBackdropClick = (event: MouseEvent) => {
    if (onClose && backdrop && event.target === backdropRef.current) {
      onClose();
    }
  };

  React.useEffect(() => {
    const { current } = backdropRef;

    if (current) {
      current.addEventListener('click', handleBackdropClick);
    }

    if (open) {
      window.setTimeout(() => {
        setVisible(open);
      }, 10);
    }

    return () => {
      if (current) {
        current.removeEventListener('click', handleBackdropClick);
      }
      setVisible(open);
    };
  }, [open, backdrop, onClose]);

  return (
    <>
      {open && (
        <ModalPortal>
          <div
            ref={backdropRef}
            className={clsn(sts.backdrop, { [sts['--visible']]: visible })}
          >
            <div className={sts.modal}>
              {closable && (
                <button className={sts.modal__close} onClick={onClose}>
                  <span className={sts.modal__close_icon}>
                    <CloseIcon />
                  </span>
                </button>
              )}
              <div className={sts.modal__container}>{render}</div>
            </div>
          </div>
        </ModalPortal>
      )}
    </>
  );
};

export default Modal;
