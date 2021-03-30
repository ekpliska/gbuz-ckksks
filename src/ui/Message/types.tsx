export enum MessageType {
  INFO = 'info',
  SUCCESS = 'success',
  WARNING = 'warning',
  ERROR = 'error',
};

export interface MessageProps {
  visible: boolean;
  message: string | React.ReactNode;
  heading?: string;
  type?: MessageType;
  autoClose?: boolean;
  onClose: () => void;
  classNameContainer?: string;
};