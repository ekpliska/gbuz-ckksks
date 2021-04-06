export interface IndustrialPremiseModel {
  id: number;
  // Наименование производственного помещения
  name: string;
  // Назначение
  appointment: number;
  // Тип помещения
  type: string;
  // Площадь
  square: string;
  // Перечень контролируемых параметров в помещении
  monitoredParameters: Array<number>;
  // Перечень специального оборудования в помещении
  specialEquipment: Array<number>;
  // Нормативный документ, название
  normativeDocument: string;
  // Серия
  series: string;
  // Номер
  number: string;
  // Дата
  date: string;
  // Примечание
  note: string;
};