export interface StandardSampleModel {
  id: number;
  // Наименование средства измерения
  name: string;
  // Назначение
  appointment: number;
  // Тип, марка
  type: string;
  // Номер
  number: string;
  // Категория стандартного образца
  category: number;
  // Наименование и аттестованное значение
  certifiedValue: string;
  // Погрешность аттестованного значения
  infelicity: string;
  // Дополнительные сведения
  additionalInfo: string;
  // Нормативный документ
  normativeDocument: string;
  // Производитель
  manufacturer: string;
  // Страна
  country: string;
  // Дата выпуска экземпляра
  yearOfIssue: string;
  // Срок годности
  shelfLife: string;
  // Примечание
  note: string;
  // Архив
  isArchive: boolean;
};