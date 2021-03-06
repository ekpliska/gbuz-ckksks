import { DocumentTypeModel, EquipmentFunctionModel, TestGroupModel, TypeOwnModel } from 'models/dictionaries';
import { IndustrialPremiseModel } from './';

/**
 * Стандартные образцы
 */

interface TestEquipmentModel {
  id?: number;
  // Наименование средства измерения
  name: string;
  // Назначение
  function: EquipmentFunctionModel;
  // Наименование испытуемых групп объектов
  groups: TestGroupModel[];
  // Тип, марка
  type: string;
  // Заводской номер
  factoryNumber: string;
  // Год ввода в эксплуатацию
  commissioningYear: string;
  // Инвентарный номер
  inventoryNumber: string;
  // Технические характеристики
  specifications: string;
  // Документ об аттестации, номер
  documentData: DocumentTypeModel;
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
};

export default TestEquipmentModel;