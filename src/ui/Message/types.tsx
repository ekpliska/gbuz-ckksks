// export enum MessageType {
//   INFO = 'info',
//   SUCCESS = 'success',
//   WARNING = 'warning',
//   ERROR = 'error',
// };

export type MessageType = 'info' | 'success' | 'warning' | 'error';


export interface MessageProps {
  visible: boolean;
  message: string | React.ReactNode;
  heading?: string;
  type?: MessageType;
  autoClose?: boolean;
  onClose: () => void;
  classNameContainer?: string;
};