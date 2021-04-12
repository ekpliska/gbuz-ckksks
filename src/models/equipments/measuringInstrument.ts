export interface MeasuringInstrumentModel {
  id: number;
  // Наименование средства измерения
  name: string;
  // Наименование определяемых характеристик
  function: number;
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
  // Свидетельство о поверке
  verificationCertificate: string;
  // Срок действия (от)
  validityDateFrom: string;
  // Срок действия (до)
  validityDateTo: string;
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
  typeOwn: number;
  // Место установки или хранения
  placeLocation: number;
  // Примечание
  note: string;
};