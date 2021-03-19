export interface VerificationEquipmentItemProps {
  id: string | number;
  nameEquipment: string;
  dateVerification: string;
  menuOverlay?: JSX.Element;
};

export interface VerificationEquipmentsProps {
  items?: VerificationEquipmentItemProps[];
};