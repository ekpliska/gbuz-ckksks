import React from 'react';
import clsn from 'classnames';
import { ControlPanelProps } from './types';
import sts from './styles.module.scss';
import MeasuringInstrumentsFrom from 'components/searchFroms/MeasuringInstrumentsFrom';
import VerificationEquipments from 'components/VerificationEquipments';

const ControlPanel: React.FC<ControlPanelProps> = ({
  verificationItems,
}): React.ReactElement => {
  return (
    <div className={sts.controlPanel}>
      <div className={clsn(sts.search, { [sts.fullWidth]: !verificationItems?.length })}>
        <MeasuringInstrumentsFrom />
      </div>
      {verificationItems?.length && (
        <div className={sts.additional}>
          <VerificationEquipments items={verificationItems} />
        </div>
      )}
    </div>
  );
};

export default ControlPanel;
