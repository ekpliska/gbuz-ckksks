import {
  DocumentTypeModel,
  EquipmentFunctionModel,
  PlacementTypeModel,
} from 'models/dictionaries';

/**
 * Производственные помещения
 */

export interface IndustrialPremiseModel {
  id?: number;
  // Наименование производственного помещения
  name: string;
  // Назначение
  function: EquipmentFunctionModel;
  // Тип помещения
  placementType: PlacementTypeModel;
  // Площадь
  square: string;
  // TODO: Перечень контролируемых параметров в помещении
  monitoredParameterIds: Array<number>;
  // TODO: Перечень специального оборудования в помещении
  specialEquipmentIds: Array<number>;
  // Нормативный документ, название
  documentData: DocumentTypeModel;
  // Примечание
  note: string;
  // Адрес раположения помещения
  location: string;
}
