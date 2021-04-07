interface AdditionalEducationModel {
  id: number;
  // Год окончания
  yearEnding: string;
  // Специальность, квалификация
  qualification: string;
  // Документ об образовании, учебное заведение
  educationDocument: string;
};

export interface EmployeesModel {
  id: number;
  // Фамилия
  lastname: string;
  // Имя
  firstname: string;
  // Отчество
  middlename: string;
  // Дата рождения
  birthDate: string;
  // Место рождения
  birthPlace: string;
  // Паспорт (серия, номер)
  passport: string;
  // Кем и когда выдан
  passportInfo: string;
  // СНИЛС
  snils: string;
  // Учебное заведение
  universityName: string;
  // Год окончания
  yearEnding: string;
  // Квалификация
  qualification: string;
  // Реквизиты документа об образовании
  diplomaDetails: string;
  // Нормативный документ
  normativeDocument: number;
  // Номер нормативного документа
  documentMumber: string;
  // Дата составления
  datePreparation: string;
  // Должность
  post: number;
  // Номер должностной инструкции
  descriptionNumber: string;
  // Дата приема на работу
  employmentDate: string;
  // Основное место работы
  isMainPlace: boolean;
  // Работа по совместительству
  isParttime: boolean;
  // Практический опыт
  experience: string;
  // Дополнительное образование
  additionalEducation: AdditionalEducationModel[];
};