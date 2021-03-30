import React from 'react';
import ReactDOM from 'react-dom';
import clsn from 'classnames';
import {
  InfoIcon,
  SuccessIcon,
  WarningIcon,
  ErrorIcon,
  CloseIcon,
} from 'ui/IconsSvg';
import { MessageProps, MessageType } from '../types';
import sts from './styles.module.scss';

let timer: NodeJS.Timeout;

const Notification: React.FC<MessageProps> = ({
  visible,
  message,
  heading,
  type = MessageType.INFO,
  autoClose,
  onClose,
  classNameContainer,
}): React.ReactElement | null => {
  const divContainerRef = React.useRef<HTMLDivElement>(null);

  const startTimer = () => {
    if (autoClose && visible) {
      timer = setTimeout(() => {
        onClose();
      }, 10000);
    }
  };

  const handleClickClose = () => {
    if (onClose) {
      onClose();
      clearTimeout(timer);
    }
  };

  const handleOutsideClick = (event: MouseEvent): void => {
    if (!divContainerRef.current?.contains(event?.target as Node) && document.contains(event?.target as Node)) {
      onClose();
      clearTimeout(timer);
    }
  };

  React.useEffect(() => {
    startTimer();
    return () => clearTimeout(timer);
  });

  React.useEffect(() => {
    if (visible) {
      document.body.addEventListener('click', handleOutsideClick);
    }
    return () => document.body.removeEventListener('click', handleOutsideClick);
  }, [visible]);

  const icon: React.ReactNode = React.useMemo(() => {
    if (type === MessageType.INFO) {
      return <InfoIcon />;
    }
    if (type === MessageType.SUCCESS) {
      return <SuccessIcon />;
    }
    if (type === MessageType.WARNING) {
      return <WarningIcon />;
    }
    if (type === MessageType.ERROR) {
      return <ErrorIcon />;
    }
  }, [type]);

  if (!visible) {
    return null;
  }

  return ReactDOM.createPortal(
    <div ref={divContainerRef} className={clsn(sts.notificationContainer, classNameContainer)}>
      <div className={clsn(sts.notification, sts[type])}>
        <div className={sts.notification__icon}>{icon}</div>
        <div className={sts.notification__content}>
          {heading && <div className={sts.notification__content_heading}>{heading}</div>}
          <div className={sts.notification__content_message}>{message}</div>
        </div>
        <div className={sts.notification__close}>
          <button
            className={sts.notification__close_button}
            onClick={handleClickClose}
          >
            <CloseIcon width='12' height='12' />
          </button>
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default Notification;
