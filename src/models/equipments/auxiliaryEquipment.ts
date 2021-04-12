export interface AuxiliaryEquipmentModel {
  id: number;
  // Наименование средства измерения
  name: string;
  // Назначение
  functionId: number;
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
  typeOwnId: number;
  // Место установки или хранения
  placementId: number;
  // Примечание
  note: string;
};