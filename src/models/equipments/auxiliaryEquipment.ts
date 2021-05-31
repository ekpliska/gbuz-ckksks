import { EquipmentFunctionModel, TypeOwnModel } from 'models/dictionaries';
import { IndustrialPremiseModel } from './';

/**
 * Вспомогательное оборудование
 */

interface AuxiliaryEquipmentModel {
  id?: number;
  // Наименование средства измерения
  name: string;
  // Назначение
  function: EquipmentFunctionModel;
  // Тип, марка
  type: string;
  // Заводской номер
  factoryNumber: string;
  // Год ввода в эксплуатацию
  commissioningYear: string;
  // Инвентарный номер
  inventoryNumber: string;
  // Производитель
  manufacturer: string;
  // Страна
  country: string;
  // Год выпуска
  yearIssue: string;
  // Право собственности
  typeOwn: TypeOwnModel;
  // Место установки или хранения
  industrialPremise: Partial<IndustrialPremiseModel>;
  // Примечание
  note: string;
};

export default AuxiliaryEquipmentModel;
