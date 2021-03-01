import React from 'react';
import {
  ProgrammIcon,
  EquipmentsIcon,
  UserProfileIcon,
  DictionariesIcon,
  SettingsIcon,
} from 'ui/IconsSvg';
import { IconsSvgProps } from 'ui/IconsSvg/types';

interface IMenuItem {
  id: string;
  label: string;
  route: string;
}

interface IMenuItems {
  id: string;
  label: string;
  icon?: React.ReactNode;
  children?: IMenuItem[];
}

const iconProps: IconsSvgProps = {
  width: '14',
  height: '14',
  fill: '#FFF',
};

// eslint-disable-next-line
export interface MenuProps {}

export interface SubmenuProps {
  // isShowing: boolean;
  childrenItems: IMenuItem[];
}

export const menuItems: IMenuItems[] = [
  {
    id: 'documents',
    label: 'Программы',
    icon: <ProgrammIcon {...iconProps} />,
    children: [
      {
        id: 'programms',
        label: 'Программы',
        route: '/programms',
      },
      {
        id: 'referrals',
        label: 'Направления',
        route: '/referrals',
      },
      {
        id: 'protocols',
        label: 'Протоколы',
        route: '/protocols',
      },
    ],
  },
  {
    id: 'equipments',
    label: 'Оборудование',
    icon: <EquipmentsIcon {...iconProps} />,
    children: [
      {
        id: 'measuring_instruments',
        label: 'Программы',
        route: '/measuring-instruments',
      },
      {
        id: 'test_equipments',
        label: 'Испытательное оборудование',
        route: '/test-equipments',
      },
      {
        id: 'auxiliary_equipment',
        label: 'Вспомогательное оборудование',
        route: '/auxiliary-equipment',
      },
      {
        id: 'standard_samples',
        label: 'Стандартные образцы',
        route: '/standard-samples',
      },
      {
        id: 'industrial-premises',
        label: 'Производственные помещения',
        route: '/industrial-premises',
      },
      {
        id: 'employees',
        label: 'Сотрудники',
        route: '/employees',
      },
    ],
  },
  {
    id: 'users_all',
    label: 'Пользователи',
    icon: <UserProfileIcon {...iconProps} />,
    children: [
      {
        id: 'users',
        label: 'Пользователи',
        route: '/users',
      },
      {
        id: 'roles',
        label: 'Роли',
        route: '/roles',
      },
    ],
  },
  {
    id: 'dictionaries',
    label: 'Справочники',
    icon: <DictionariesIcon {...iconProps} />,
    children: [
      {
        id: 'medicines',
        label: 'Лекарственные средства',
        route: '/medicines',
      },
      {
        id: 'discharge_forms',
        label: 'Формы выписки',
        route: '/discharge-forms',
      },
      {
        id: 'quality_indicators',
        label: 'Показатели качества по НД',
        route: '/quality-indicators',
      },
      {
        id: 'destination_equipment',
        label: 'Назначения для оборудования',
        route: '/destination-equipment',
      },
      {
        id: 'units',
        label: 'Единицы измерения',
        route: '/units',
      },
      {
        id: 'organizations',
        label: 'Организации',
        route: '/organizations',
      },
    ],
  },
  {
    id: 'settings',
    label: 'Настройки',
    icon: <SettingsIcon {...iconProps} />,
    children: [
      {
        id: 'laboratory',
        label: 'Лаборатория',
        route: '/laboratory',
      },
      {
        id: 'typical_forms',
        label: 'Типовые формы',
        route: '/typical-forms',
      },
    ],
  },
];
