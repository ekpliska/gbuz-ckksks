// eslint-disable-next-line
export interface NavbarProps {}

interface INavbarItem {
  id: string;
  label: string;
  route: string;
}

interface INavbarItems {
  id: string;
  label: string;
  icon?: React.ReactNode;
  children?: INavbarItem[];
}

export const navbarItems: INavbarItems[] = [
  {
    id: 'documents',
    label: 'Программы',
    icon: '',
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
    icon: '',
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
    icon: '',
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
    icon: '',
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
    icon: '',
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
