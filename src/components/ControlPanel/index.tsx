import React from 'react';
import clsn from 'classnames';
import { ControlPanelProps } from './types';
import sts from './styles.module.scss';
// import { SF_MeasuringInstruments } from 'components/Forms/Search';
// import VerificationEquipments from 'components/VerificationEquipments';

const ControlPanel: React.FC<ControlPanelProps> = ({
  searchFormComponent,
  verificationComponent,
}): React.ReactElement => {
  return (
    <div className={sts.controlPanel}>
      <div
        className={clsn(sts.search, {
          [sts.fullWidth]: !verificationComponent,
        })}
      >
        {searchFormComponent}
      </div>
      {verificationComponent ? (
        <div className={sts.additional}>
          {verificationComponent}
          {/* <VerificationEquipments items={verificationItems} /> */}
        </div>
      ) : null}
    </div>
  );
};

export default ControlPanel;
