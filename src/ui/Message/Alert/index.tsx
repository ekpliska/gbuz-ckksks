import React from 'react';
import clsn from 'classnames';
import {
  InfoIcon,
  SuccessIcon,
  WarningIcon,
  ErrorIcon,
  CloseIcon,
} from 'ui/IconsSvg';
import { MessageProps } from '../types';
import sts from './styles.module.scss';

let timer: NodeJS.Timeout;

const Alert: React.FC<MessageProps> = ({
  visible,
  message,
  type = 'info',
  autoClose,
  onClose,
  classNameContainer,
}): React.ReactElement => {

  const startTimer = () => {
    if (autoClose && visible) {
      timer = setTimeout(() => {
        onClose();
      }, 10000);
    }
  };

  React.useEffect(() => {
    startTimer();
    return () => clearTimeout(timer);
  });

  const handleClickClose = () => {
    if (onClose) {
      onClose();
      clearTimeout(timer);
    }
  };

  const icon: React.ReactNode = React.useMemo(() => {
    if (type === 'info') {
      return <InfoIcon />;
    }
    if (type === 'success') {
      return <SuccessIcon />;
    }
    if (type === 'warning') {
      return <WarningIcon />;
    }
    if (type === 'error') {
      return <ErrorIcon />;
    }
  }, [type]);

  return (
    <>
      {visible && (
        <div className={clsn(sts.alertContainer, classNameContainer)}>
          <div className={clsn(sts.alert, sts[type])}>
            <div className={sts.alert__icon}>{icon}</div>
            <div className={sts.alert__content}>{message}</div>
            <div className={sts.alert__close}>
              <button
                title='Закрыть'
                className={sts.alert__close_button}
                onClick={handleClickClose}
              >
                <CloseIcon width='12' height='12' />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Alert;
