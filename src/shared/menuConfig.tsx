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
import { IconsSvgProps } from 'ui/IconsSvg/types';

const iconProps: IconsSvgProps = {
  width: '14',
  height: '14',
  fill: '#FFF',
};

export enum ParentPages {
  DOCUMENTS = 'documents',
  EQUIPMENTS = 'equipments',
  USERS_ALL = 'users_all',
  DICTIONARIES = 'dictionaries',
  SETTINGS = 'settings',
};

export interface IMenuItem {
  id: string;
  label: string;
  fullLabel?: string;
  route: string;
  icon?: React.ReactNode;
}

export interface IMenuItems {
  id: string;
  label: string;
  mainRoute: string;
  icon?: React.ReactNode;
  children?: IMenuItem[];
}

export const menuItems: IMenuItems[] = [
  {
    id: ParentPages.DOCUMENTS,
    label: 'Программы',
    icon: <ProgrammIcon {...iconProps} />,
    mainRoute: '/documents',
    children: [
      {
        id: 'programms',
        label: 'Программы',
        fullLabel: 'Программы проведения испытаний',
        icon: <ProgrammIcon {...iconProps} />,
        route: '/programms',
      },
      {
        id: 'referrals',
        label: 'Направления',
        fullLabel: 'Направления на проведения испытаний',
        icon: <ReferralsIcon {...iconProps} />,
        route: '/referrals',
      },
      {
        id: 'protocols',
        label: 'Протоколы',
        fullLabel: 'Протоколы испытаний',
        icon: <ProtocolsIcon {...iconProps} />,
        route: '/protocols',
      },
    ],
  },
  {
    id: ParentPages.EQUIPMENTS,
    label: 'Оборудование',
    icon: <EquipmentsIcon {...iconProps} />,
    mainRoute: '/equipments',
    children: [
      {
        id: 'measuring_instruments',
        label: 'Средства измерения',
        icon: <MeasuringInstrumentsIcon {...iconProps} />,
        route: '/measuring-instruments',
      },
      {
        id: 'test_equipments',
        label: 'Испытательное оборудование',
        icon: <TestEquipmentsIcon {...iconProps} />,
        route: '/test-equipments',
      },
      {
        id: 'auxiliary_equipment',
        label: 'Вспомогательное оборудование',
        fullLabel: 'Вспом. оборудование',
        icon: <AuxiliaryEquipmentIcon {...iconProps} />,
        route: '/auxiliary-equipment',
      },
      {
        id: 'standard_samples',
        label: 'Стандартные образцы',
        icon: <StandardSamplesIcon {...iconProps} />,
        route: '/standard-samples',
      },
      {
        id: 'industrial-premises',
        label: 'Производственные помещения',
        fullLabel: 'Производ. помещения',
        icon: <IndustrialPremisesIcon {...iconProps} />,
        route: '/industrial-premises',
      },
      {
        id: 'employees',
        label: 'Сотрудники',
        icon: <EmployeesIcon {...iconProps} />,
        route: '/employees',
      },
    ],
  },
  {
    id: ParentPages.USERS_ALL,
    label: 'Пользователи',
    icon: <UserProfileIcon {...iconProps} />,
    mainRoute: '/users-all',
    children: [
      {
        id: 'users',
        label: 'Пользователи',
        icon: <UserCardIcon {...iconProps} />,
        route: '/users',
      },
      {
        id: 'roles',
        label: 'Роли',
        icon: <RoleIcon {...iconProps} />,
        route: '/roles',
      },
    ],
  },
  {
    id: ParentPages.DICTIONARIES,
    label: 'Справочники',
    icon: <DictionariesIcon {...iconProps} />,
    mainRoute: '/dictionaries',
    children: [
      {
        id: 'medicines',
        label: 'Лекарственные средства',
        icon: <MedicinesIcon {...iconProps} />,
        route: '/medicines',
      },
      {
        id: 'discharge_forms',
        label: 'Формы выписки',
        icon: <DischargeFormsIcon {...iconProps} />,
        route: '/discharge-forms',
      },
      {
        id: 'quality_indicators',
        label: 'Показатели качества по НД',
        icon: <QualityIndicatorsIcon {...iconProps} />,
        route: '/quality-indicators',
      },
      {
        id: 'destination_equipment',
        label: 'Назначения для оборудования',
        icon: <DestinationEquipmentIcon {...iconProps} />,
        route: '/destination-equipment',
      },
      {
        id: 'units',
        label: 'Единицы измерения',
        icon: <UnitsIcon {...iconProps} />,
        route: '/units',
      },
      {
        id: 'organizations',
        label: 'Организации',
        icon: <OrganizationsIcon {...iconProps} />,
        route: '/organizations',
      },
    ],
  },
  {
    id: ParentPages.SETTINGS,
    label: 'Настройки',
    icon: <SettingsIcon {...iconProps} />,
    mainRoute: '/settings',
    children: [
      {
        id: 'laboratory',
        label: 'Лаборатория',
        icon: <InfoIcon {...iconProps} />,
        route: '/laboratory',
      },
      {
        id: 'typical_forms',
        label: 'Типовые формы',
        icon: <TypicalFormsIcon {...iconProps} />,
        route: '/typical-forms',
      },
    ],
  },
];
