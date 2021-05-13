import { DocumentTypeModel, EquipmentFunctionModel, SampleCategoryModel } from 'models/dictionaries';

/**
 * Стандартные образцы
 */

export interface StandardSampleModel {
  id?: number;
  // Наименование средства измерения
  name: string;
  // Назначение
  function: EquipmentFunctionModel;
  // Тип, марка
  type: string;
  // Номер
  number: string;
  // Категория стандартного образца
  category: SampleCategoryModel;
  // Наименование и аттестованное значение
  certifiedValue: string;
  // Погрешность аттестованного значения
  infelicity: string;
  // Дополнительные сведения
  additionalInfo: string;
  // Нормативный документ, название
  documentData: DocumentTypeModel;
  // Производитель
  manufacturer: string;
  // Страна
  country: string;
  // Дата выпуска экземпляра
  yearIssue: string;
  // Срок годности
  shelfLife: string;
  // Примечание
  note: string;
  // Архив
  isArchive: boolean;
};
