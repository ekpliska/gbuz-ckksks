import React from 'react';

interface useModalReturnProps {
  open: boolean;
  close: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useModal = (): useModalReturnProps => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [close, setClose] = React.useState<boolean>(false);

  const onOpen = (): void => {
    setOpen(true);
  };

  const onClose = (): void => {
    setOpen(false);
    setClose(true);
  };

  return { open, close, onOpen, onClose };
};

export default useModal;
