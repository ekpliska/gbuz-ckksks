export enum EquipmentEntity {
  measuringInstrument = 'measuringInstrument',
  testEquipment = 'testEquipment',
  auxiliaryEquipment = 'auxiliaryEquipment',
  standardSample = 'standardSample',
  industrialPremise = 'industrialPremise',
  employee = 'employee',
};

export type { default as MeasuringInstrumentModel } from './measuringInstrument';
export type { default as TestEquipmentModel } from './testEquipment';
export type { default as AuxiliaryEquipmentModel } from './auxiliaryEquipment';
export type { default as StandardSampleModel } from './standardSample';
export type { default as IndustrialPremiseModel } from './industrialPremise';
export type { default as EmployeesModel } from './employee';