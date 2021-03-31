import React from 'react';
import ReactDOM from 'react-dom';

const ModalPortal: React.FC = ({ children }): React.ReactElement => {
  return ReactDOM.createPortal(children, document.body);
};

export default ModalPortal;