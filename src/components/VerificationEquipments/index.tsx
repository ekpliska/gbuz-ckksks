import React from 'react';
import Menu, { MenuItem } from 'ui/Menu';
import EmptyLabel from 'ui/EmptyLabel';
import VerificationEquipmentItem from './VerificationEquipmentItem';
import {
  VerificationEquipmentsProps,
  VerificationEquipmentItemProps,
} from './types';
import sts from './styles.module.scss';

const tempData: VerificationEquipmentItemProps[] = [
  {
    id: 0,
    nameEquipment: 'Анализатор жидкости “Флюорат-01-3М”',
    dateVerification: '2021-03-17',
  },
  {
    id: 1,
    nameEquipment: 'Анализатор жидкости кондуктометрический HI98308',
    dateVerification: '2021-03-31',
  },
  {
    id: 2,
    nameEquipment: 'Вакуумметр “ВПЗ-УУ2”',
    dateVerification: '2021-03-10',
  },
];

const VerificationEquipments: React.FC<VerificationEquipmentsProps> = ({
  items = tempData,
}): React.ReactElement => {

  const handleMenuItemClick = () => {
    return;
  };

  const menu = React.useMemo(() => {
    return (
      <Menu>
        <MenuItem text='Просмотр' onClick={handleMenuItemClick} />
        <MenuItem text='Бланк на поверку' onClick={handleMenuItemClick} />
      </Menu>
    );
  }, []);

  return (
    <div className={sts.verificationEquipments}>
      <h3 className={sts.verificationEquipments__heading}>
        Ближайщие поверки средств измерения
      </h3>
      <div className={sts.verificationEquipments__content}>
        {items?.length ? (
          items.map((item) => (
            <VerificationEquipmentItem
              menuOverlay={menu}
              key={item.id}
              {...item}
            />
          ))
        ) : (
          <EmptyLabel textLabel="Ближайшие поверки отсутсвуют." />
        )}
      </div>
    </div>
  );
};

export default VerificationEquipments;
