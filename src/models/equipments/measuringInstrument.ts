import { DocumentTypeModel, EquipmentFunctionModel, TypeOwnModel } from 'models/dictionaries';
import { IndustrialPremiseModel } from './industrialPremise';

/**
 * Средства измерений
 */

export interface MeasuringInstrumentModel {
  id?: number;
  // Наименование средства измерения
  name: string;
  // Наименование определяемых характеристик
  function: EquipmentFunctionModel;
  // Тип, марка
  type: string;
  // Заводской номер
  factoryNumber: string;
  // Год ввода в эксплуатацию
  commissioningYear: string;
  // Инвентарный номер
  inventoryNumber: string;
  // Диапазон измерений
  measuringRange: string;
  // Класс точности (разряд), погрешность
  accuracyClass: string;
  // Нормативный документ, название
  documentData: DocumentTypeModel;
  // Ежегодно
  annually: boolean;
  // Статус поверки
  statusVerification: boolean;
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
}
