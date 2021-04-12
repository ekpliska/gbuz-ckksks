export interface IndustrialPremiseModel {
  id: number;
  // Наименование производственного помещения
  name: string;
  // Назначение
  functionId: number;
  // Тип помещения
  placementTypeId: string;
  // Площадь
  square: string;
  // Перечень контролируемых параметров в помещении
  monitoredParameterIds: Array<number>;
  // Перечень специального оборудования в помещении
  specialEquipmentIds: Array<number>;
  // Нормативный документ, название
  documentTypeId: number;
  // Серия
  series: string;
  // Номер
  number: string;
  // Дата
  date: string;
  // Примечание
  note: string;
};