import { VerificationEquipmentItemProps } from 'components/VerificationEquipments/types';

export interface ControlPanelProps {
  searchFormComponent: React.ReactNode;
  verificationComponent?: React.ReactNode;
  verificationItems?: VerificationEquipmentItemProps[];
};