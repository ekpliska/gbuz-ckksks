export interface ModalProps {
  open: boolean;
  render: React.ReactNode;
  backdrop?: boolean;
  closable?: boolean;
  onClose?: () => void;
};