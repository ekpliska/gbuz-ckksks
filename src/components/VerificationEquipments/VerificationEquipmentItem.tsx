import React from 'react';
import Dropdown from 'ui/Dropdown';
import { ClockIcon } from 'ui/IconsSvg';
import { VerificationEquipmentItemProps } from './types';
import sts from './styles.module.scss';

const VerificationEquipmentItem: React.FC<VerificationEquipmentItemProps> = ({
  menuOverlay,
  nameEquipment,
  dateVerification,
}): React.ReactElement => {
  return (
    <div className={sts.verificationConteiner}>
      <Dropdown overlay={menuOverlay}>
        <div className={sts.verification}>
          <span className={sts.verification__icon}>
            <ClockIcon width='14' height='14' />
          </span>
          <span className={sts.verification__text}>{nameEquipment}</span>
          <span className={sts.verification__label}>{dateVerification}</span>
        </div>
      </Dropdown>
    </div>
  );
};

export default VerificationEquipmentItem;
