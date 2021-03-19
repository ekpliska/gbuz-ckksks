import React from 'react';
import clsn from 'classnames';
import { ControlPanelProps } from './types';
import sts from './styles.module.scss';
import MeasuringInstrumentsFrom from 'components/searchFroms/MeasuringInstrumentsFrom';
import VerificationEquipments from 'components/VerificationEquipments';

const ControlPanel: React.FC<ControlPanelProps> = (): React.ReactElement => {
  return (
    <div className={sts.controlPanel}>
      <div className={clsn(sts.search, { [sts.fullWidth]: false })}>
        <MeasuringInstrumentsFrom />
      </div>
      <div className={sts.additional}>
        <VerificationEquipments />
      </div>
    </div>
  );
};

export default ControlPanel;
