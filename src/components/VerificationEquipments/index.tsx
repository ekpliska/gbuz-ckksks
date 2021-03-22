import React from 'react';
import Menu, { MenuItem } from 'ui/Menu';
import EmptyLabel from 'ui/EmptyLabel';
import VerificationEquipmentItem from './VerificationEquipmentItem';
import { VerificationEquipmentsProps } from './types';
import sts from './styles.module.scss';

const VerificationEquipments: React.FC<VerificationEquipmentsProps> = ({ items }): React.ReactElement => {
  const handleMenuItemClick = () => {
    return;
  };

  const menu = React.useMemo(() => {
    return (
      <Menu>
        <MenuItem text="Просмотр" onClick={handleMenuItemClick} />
        <MenuItem text="Бланк на поверку" onClick={handleMenuItemClick} />
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
