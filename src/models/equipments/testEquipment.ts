export interface TestEquipmentModel {
  id: number;
  // Наименование средства измерения
  name: string;
  // Назначение
  functionId: number;
  // Наименование испытуемых групп объектов
  testGroupId: number;
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
  yearIssue: string;
  // Право собственности
  typeOwnId: number;
  // Место установки или хранения
  placementId: number;
  // Примечание
  note: string;
};