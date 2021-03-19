import React from 'react';
import { EmptyIcon } from 'ui/IconsSvg';
import { EmptyLabelProps, EmptyLabelTypes } from './types';
import sts from './styles.module.scss';

const EmptyLabel: React.FC<EmptyLabelProps> = ({
  textLabel,
  type = EmptyLabelTypes.SPAN,
}): React.ReactElement => {
  return (
    <div className={sts.emptyLabel}>
      {type === EmptyLabelTypes.WITH_IMG && (
        <span className={sts.emptyLabel__image}>
          <EmptyIcon />
        </span>
      )}
      <span className={sts.emptyLabel__text}>{textLabel}</span>
    </div>
  );
};

export default EmptyLabel;
