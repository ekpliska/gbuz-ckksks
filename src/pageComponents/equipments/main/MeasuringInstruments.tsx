import React from 'react';
import PageHeading from 'components/PageHeading';
import ControlPanel from 'components/ControlPanel';
import GeneralTable from 'ui/GeneralTable';
import { VerificationEquipmentItemProps } from 'components/VerificationEquipments/types';
import { MeasuringInstrumentsProps } from './types';
import Tooltip from 'ui/Tooltip';
import { PlacementTypes } from 'ui/Tooltip/types';
import { Switch, Checkbox, Radio, Select } from 'ui/Inputs';
import { IOptionType } from 'ui/Inputs/Select/types';
import { Alert, Notification } from 'ui/Message';
import { MessageType } from 'ui/Message/types';
import Modal from 'ui/Modal';
import useModal from 'hooks/useModal';

const tempData: VerificationEquipmentItemProps[] = [
  {
    id: 0,
    nameEquipment: 'Анализатор жидкости “Флюорат-01-3М”',
    dateVerification: '2021-03-17',
  },
  {
    id: 1,
    nameEquipment: 'Анализатор жидкости кондуктометрический HI98308',
    dateVerification: '2021-03-31',
  },
  {
    id: 2,
    nameEquipment: 'Вакуумметр “ВПЗ-УУ2”',
    dateVerification: '2021-03-10',
  },
];

const selectValues: IOptionType[] = [
  {
    id: 1,
    value: 'Value 1',
  },
  {
    id: 2,
    value: 'Value 2',
  },
  {
    id: 3,
    value: 'Value 3',
  },
];

const MeasuringInstruments: React.FC<MeasuringInstrumentsProps> = ({
  headingSettings,
}): React.ReactElement => {
  const [value, setValue] = React.useState<IOptionType | null>(null);
  const [isShowAlert, setIsShowAlert] = React.useState<boolean>(false);
  const [isShowNotifiaction, setIsShowNotifiaction] = React.useState<boolean>(false);

  const { open, onOpen, onClose } = useModal();

  const handleClickExportToPdf = (): void => {
    return;
  };

  const handleClickExportToExcel = (): void => {
    return;
  };

  const handleClickCreate = (): void => {
    return;
  };

  return (
    <>
      <PageHeading
        buttonCreateLabel='Добавить оборудование'
        exportPdfMethod={handleClickExportToPdf}
        exportExcelMethod={handleClickExportToExcel}
        buttonCreateMethod={handleClickCreate}
        {...headingSettings}
      />
      <ControlPanel verificationItems={tempData} />
      <Switch id='switch' name='switch' />
      <Tooltip title='Анализатор Анализатор Анализатор' placement={PlacementTypes.BOTTOM}>
        <button>Button</button>
      </Tooltip>
      <div style={{ margin: '0 120px' }}>
        <Checkbox name='check' value={true} label='Check value' />
        <Radio name='radio' label='Radio value 1' value='radio1' radioValue='radio1' />
        <Radio name='radio' label='Radio value 2' value='radio1' radioValue='radio2' />
        <Select label='Статус' options={selectValues} value={value} onSelect={setValue} />
      </div>
      <div>
        <button onClick={() => setIsShowAlert(true)}>Show</button>
        <Alert visible={isShowAlert} message='Обратите внимание' type={MessageType.INFO} onClose={() => setIsShowAlert(false)} />
      </div>
      <div>
        <button onClick={() => setIsShowNotifiaction(true)}>Show notification</button>
        <Notification
          visible={isShowNotifiaction}
          heading='Программы проведения испытаний'
          message='Ошибка обновления программы проведения испытаний. Проверьте корректность заполненных данных.'
          type={MessageType.INFO}
          onClose={() => setIsShowNotifiaction(false)}
          autoClose={true}
        />
      </div>
      <div>
        <button onClick={onOpen}>Open</button>
        <Modal 
          open={open}
          onClose={onClose}
          render={<h1>Модальное окно</h1>}
        />
      </div>
      <GeneralTable />
    </>
  );
};

export default MeasuringInstruments;
