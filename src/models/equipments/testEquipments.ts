export interface TestEquipmentsModel {
  id: number;
  // Наименование средства измерения
  name: string;
  // Наименование определяемых характеристик
  appointment: number;
  // Наименование испытуемых групп объектов
  groups: number;
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
  attestationDocument: string;
  // Срок действия (от)
  validityDateFrom: string;
  // Срок действия (до)
  validityDateTo: string;
  // Статус поверки
  statusVerification: boolean;
  // Производитель
  manufacturer: string;
  // Страна
  country: string;
  // Год выпуска
  yearOfIssue: string;
  // Право собственности
  ownership: number;
  // Место установки или хранения
  placeOfLocation: number;
  // Примечание
  note: string;
};