import React from 'react';
import {
  ProgrammIcon,
  EquipmentsIcon,
  UserProfileIcon,
  DictionariesIcon,
  SettingsIcon,
  ReferralsIcon,
  ProtocolsIcon,
  MeasuringInstrumentsIcon,
  TestEquipmentsIcon,
  AuxiliaryEquipmentIcon,
  StandardSamplesIcon,
  IndustrialPremisesIcon,
  EmployeesIcon,
  UserCardIcon,
  RoleIcon,
  MedicinesIcon,
  DischargeFormsIcon,
  QualityIndicatorsIcon,
  DestinationEquipmentIcon,
  UnitsIcon,
  OrganizationsIcon,
  InfoIcon,
  TypicalFormsIcon,
} from 'ui/IconsSvg';
import Tiles from 'components/Tiles';
import {
  ChildPages,
  IRoutes,
  ParentPages,
  ActionPage,
  iconProps,
} from './types';
import {
  MeasuringInstruments,
  TestEquipments,
  AuxiliaryEquipments,
  StandardSamples,
  IndustrialPremises,
  Employees,
} from 'pageComponents/equipments/main';
import {
  MeasuringInstrumentsForm,
  TestEquipmentsForm,
  AuxiliaryEquipmentsForm,
  StandardSamplesForm,
  IndustrialPremisesForm,
  EmployeesForm,
} from 'pageComponents/equipments/form';

export const tempProps: React.ReactNode = null;

export const appRoutes: IRoutes[] = [
  {
    id: ParentPages.ROOT,
    path: ParentPages.ROOT,
    exact: true,
    Component: Tiles,
    headingSettings: {
      heading: 'ГБУЗ ЦККСЛС',
    },
  },
  {
    id: ParentPages.DOCUMENTS,
    path: `/${ParentPages.DOCUMENTS}`,
    exact: true,
    Component: Tiles,
    headingSettings: {
      heading: 'Программы',
      iconHeading: <ProgrammIcon {...iconProps} />,
    },
    childRoutes: [
      {
        id: ChildPages.PROGRAMMS,
        path: `/${ParentPages.DOCUMENTS}/${ChildPages.PROGRAMMS}`,
        exact: true,
        Component: () => <div>Программы</div>,
        headingSettings: {
          heading: 'Программы',
          fullHeading: 'Программы проведения испытаний',
          iconHeading: <ProgrammIcon {...iconProps} />,
        },
      },
      {
        id: ChildPages.REFERRALS,
        path: `/${ParentPages.DOCUMENTS}/${ChildPages.REFERRALS}`,
        exact: true,
        Component: () => <div>Направления</div>,
        headingSettings: {
          heading: 'Направления',
          fullHeading: 'Направления на проведения испытаний',
          iconHeading: <ReferralsIcon {...iconProps} />,
        },
      },
      {
        id: ChildPages.PROTOCOLS,
        path: `/${ParentPages.DOCUMENTS}/${ChildPages.PROTOCOLS}`,
        exact: true,
        Component: () => <div>Протоколы</div>,
        headingSettings: {
          heading: 'Протоколы',
          fullHeading: 'Протоколы испытаний',
          iconHeading: <ProtocolsIcon {...iconProps} />,
        },
      },
    ],
  },
  {
    id: ParentPages.EQUIPMENTS,
    path: `/${ParentPages.EQUIPMENTS}`,
    exact: true,
    Component: Tiles,
    headingSettings: {
      heading: 'Оборудование',
      iconHeading: <EquipmentsIcon {...iconProps} />,
    },
    childRoutes: [
      {
        id: ChildPages.MEASURING_INSTRUMENTS,
        path: `/${ParentPages.EQUIPMENTS}/${ChildPages.MEASURING_INSTRUMENTS}`,
        exact: true,
        Component: MeasuringInstruments,
        headingSettings: {
          heading: 'Средства измерения',
          iconHeading: <MeasuringInstrumentsIcon {...iconProps} />,
          isExportPdf: true,
          isExportExcel: true,
          isCreate: true,
        },
        childRoutes: [
          {
            id: ActionPage.CREATE,
            path: `/${ParentPages.EQUIPMENTS}/${ChildPages.MEASURING_INSTRUMENTS}/${ActionPage.CREATE}`,
            exact: true,
            Component: MeasuringInstrumentsForm,
            headingSettings: {
              heading: 'Создание средства измерения',
            },
          },
        ],
      },
      {
        id: ChildPages.TEST_EQUIPMENTS,
        path: `/${ParentPages.EQUIPMENTS}/${ChildPages.TEST_EQUIPMENTS}`,
        exact: true,
        Component: TestEquipments,
        headingSettings: {
          heading: 'Испытательное оборудование',
          iconHeading: <TestEquipmentsIcon {...iconProps} />,
          isExportPdf: true,
          isExportExcel: true,
          isCreate: true,
        },
        childRoutes: [
          {
            id: ActionPage.CREATE,
            path: `/${ParentPages.EQUIPMENTS}/${ChildPages.TEST_EQUIPMENTS}/${ActionPage.CREATE}`,
            exact: true,
            Component: TestEquipmentsForm,
            headingSettings: {
              heading: 'Создание испытательного оборудования',
            },
          },
        ],
      },
      {
        id: ChildPages.AUXILIARY_EQUIPMENT,
        path: `/${ParentPages.EQUIPMENTS}/${ChildPages.AUXILIARY_EQUIPMENT}`,
        exact: true,
        Component: AuxiliaryEquipments,
        headingSettings: {
          heading: 'Вспом. оборудование',
          fullHeading: 'Вспомогательное оборудование',
          iconHeading: <AuxiliaryEquipmentIcon {...iconProps} />,
          isExportPdf: true,
          isExportExcel: true,
          isCreate: true,
        },
        childRoutes: [
          {
            id: ActionPage.CREATE,
            path: `/${ParentPages.EQUIPMENTS}/${ChildPages.AUXILIARY_EQUIPMENT}/${ActionPage.CREATE}`,
            exact: true,
            Component: AuxiliaryEquipmentsForm,
            headingSettings: {
              heading: 'Создание вспомогательного оборудования',
            },
          },
        ],
      },
      {
        id: ChildPages.STANDARD_SAMPLES,
        path: `/${ParentPages.EQUIPMENTS}/${ChildPages.STANDARD_SAMPLES}`,
        exact: true,
        Component: StandardSamples,
        headingSettings: {
          heading: 'Стандартные образцы',
          iconHeading: <StandardSamplesIcon {...iconProps} />,
          isExportPdf: true,
          isExportExcel: true,
          isCreate: true,
        },
        childRoutes: [
          {
            id: ActionPage.CREATE,
            path: `/${ParentPages.EQUIPMENTS}/${ChildPages.STANDARD_SAMPLES}/${ActionPage.CREATE}`,
            exact: true,
            Component: StandardSamplesForm,
            headingSettings: {
              heading: 'Создание стандартного образца',
            },
          },
        ],
      },
      {
        id: ChildPages.INDUSTRIAL_PREMISES,
        path: `/${ParentPages.EQUIPMENTS}/${ChildPages.INDUSTRIAL_PREMISES}`,
        exact: true,
        Component: IndustrialPremises,
        headingSettings: {
          heading: 'Производ. помещения',
          fullHeading: 'Произдводственные помещения',
          iconHeading: <IndustrialPremisesIcon {...iconProps} />,
          isExportPdf: true,
          isExportExcel: true,
          isCreate: true,
        },
        childRoutes: [
          {
            id: ActionPage.CREATE,
            path: `/${ParentPages.EQUIPMENTS}/${ChildPages.INDUSTRIAL_PREMISES}/${ActionPage.CREATE}`,
            exact: true,
            Component: IndustrialPremisesForm,
            headingSettings: {
              heading: 'Создание произдводственного помещения',
            },
          },
        ],
      },
      {
        id: ChildPages.EMPLOYEES,
        path: `/${ParentPages.EQUIPMENTS}/${ChildPages.EMPLOYEES}`,
        exact: true,
        Component: Employees,
        headingSettings: {
          heading: 'Сотрудники лаборатории',
          iconHeading: <EmployeesIcon {...iconProps} />,
          isExportPdf: true,
          isExportExcel: true,
          isCreate: true,
        },
        childRoutes: [
          {
            id: ActionPage.CREATE,
            path: `/${ParentPages.EQUIPMENTS}/${ChildPages.EMPLOYEES}/${ActionPage.CREATE}`,
            exact: true,
            Component: EmployeesForm,
            headingSettings: {
              heading: 'Новый сотрудник лаборатории',
              isUploadButton: true,
            },
          },
        ],
      },
    ],
  },
  {
    id: ParentPages.USERS_ALL,
    path: `/${ParentPages.USERS_ALL}`,
    exact: true,
    Component: Tiles,
    headingSettings: {
      heading: 'Пользователи',
      fullHeading: 'Пользователи и роли',
      iconHeading: <UserProfileIcon {...iconProps} />,
    },
    childRoutes: [
      {
        id: ChildPages.USERS,
        path: `/${ParentPages.USERS_ALL}/${ChildPages.USERS}`,
        exact: true,
        Component: () => <div>Программы</div>,
        headingSettings: {
          heading: 'Пользователи',
          iconHeading: <UserCardIcon {...iconProps} />,
        },
      },
      {
        id: ChildPages.ROLES,
        path: `/${ParentPages.USERS_ALL}/${ChildPages.ROLES}`,
        exact: true,
        Component: () => <div>Программы</div>,
        headingSettings: {
          heading: 'Роли',
          iconHeading: <RoleIcon {...iconProps} />,
        },
      },
    ],
  },
  {
    id: ParentPages.DICTIONARIES,
    path: `/${ParentPages.DICTIONARIES}`,
    exact: true,
    Component: Tiles,
    headingSettings: {
      heading: 'Справочники',
      iconHeading: <DictionariesIcon {...iconProps} />,
    },
    childRoutes: [
      {
        id: ChildPages.MEDICINES,
        path: `/${ParentPages.DICTIONARIES}/${ChildPages.MEDICINES}`,
        exact: true,
        Component: () => <div>Программы</div>,
        headingSettings: {
          heading: 'Лекарственные средства',
          iconHeading: <MedicinesIcon {...iconProps} />,
        },
      },
      {
        id: ChildPages.DISCHARGE_FORMS,
        path: `/${ParentPages.DICTIONARIES}/${ChildPages.DISCHARGE_FORMS}`,
        exact: true,
        Component: () => <div>Программы</div>,
        headingSettings: {
          heading: 'Формы выписки',
          iconHeading: <DischargeFormsIcon {...iconProps} />,
        },
      },
      {
        id: ChildPages.QUALITY_INDICATORS,
        path: `/${ParentPages.DICTIONARIES}/${ChildPages.QUALITY_INDICATORS}`,
        exact: true,
        Component: () => <div>Программы</div>,
        headingSettings: {
          heading: 'Показатели качества по НД',
          iconHeading: <QualityIndicatorsIcon {...iconProps} />,
        },
      },
      {
        id: ChildPages.DESTINATION_EQUIPMENT,
        path: `/${ParentPages.DICTIONARIES}/${ChildPages.DESTINATION_EQUIPMENT}`,
        exact: true,
        Component: () => <div>Программы</div>,
        headingSettings: {
          heading: 'Назначения для оборудования',
          iconHeading: <DestinationEquipmentIcon {...iconProps} />,
        },
      },
      {
        id: ChildPages.UNITS,
        path: `/${ParentPages.DICTIONARIES}/${ChildPages.UNITS}`,
        exact: true,
        Component: () => <div>Программы</div>,
        headingSettings: {
          heading: 'Единицы измерения',
          iconHeading: <UnitsIcon {...iconProps} />,
        },
      },
      {
        id: ChildPages.ORGANIZATIONS,
        path: `/${ParentPages.DICTIONARIES}/${ChildPages.ORGANIZATIONS}`,
        exact: true,
        Component: () => <div>Программы</div>,
        headingSettings: {
          heading: 'Организации',
          iconHeading: <OrganizationsIcon {...iconProps} />,
        },
      },
    ],
  },
  {
    id: ParentPages.SETTINGS,
    path: `/${ParentPages.SETTINGS}`,
    exact: true,
    Component: Tiles,
    headingSettings: {
      heading: 'Настройки',
      iconHeading: <SettingsIcon {...iconProps} />,
    },
    childRoutes: [
      {
        id: ChildPages.LABORATORY,
        path: `/${ParentPages.SETTINGS}/${ChildPages.LABORATORY}`,
        exact: true,
        Component: () => <div>Лаборатория</div>,
        headingSettings: {
          heading: 'Лаборатория',
          iconHeading: <InfoIcon {...iconProps} />,
        },
      },
      {
        id: ChildPages.TYPICAL_FORMS,
        path: `/${ParentPages.SETTINGS}/${ChildPages.TYPICAL_FORMS}`,
        exact: true,
        Component: () => <div>Лаборатория</div>,
        headingSettings: {
          heading: 'Типовые формы',
          iconHeading: <TypicalFormsIcon {...iconProps} />,
        },
      },
    ],
  },
];
