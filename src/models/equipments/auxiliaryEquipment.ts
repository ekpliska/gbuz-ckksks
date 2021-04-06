export interface AuxiliaryEquipmentModel {
  id: number;
  // Наименование средства измерения
  name: string;
  // Назначение
  appointment: number;
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
  yearOfIssue: string;
  // Право собственности
  ownership: number;
  // Место установки или хранения
  placeOfLocation: number;
  // Примечание
  note: string;
};