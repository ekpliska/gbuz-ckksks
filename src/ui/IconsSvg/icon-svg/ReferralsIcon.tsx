import React from 'react';
import { IconsSvgProps } from '../types';

export const ReferralsIcon: React.FC<IconsSvgProps> = ({
  width,
  height,
  fill,
}): React.ReactElement => {
  return (
    <svg
      viewBox='64 64 896 896'
      focusable='false'
      data-icon='referrals'
      width={width ?? '1em'}
      height={height ?? '1em'}
      fill={fill ?? '#B4B9C3'}
      aria-hidden='true'
    >
      <path d='M832 112H724V72c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v40H500V72c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v40H320c-17.7 0-32 14.3-32 32v120h-96c-17.7 0-32 14.3-32 32v632c0 17.7 14.3 32 32 32h512c17.7 0 32-14.3 32-32v-96h96c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM664 486H514V336h.2L664 485.8v.2zm128 274h-56V456L544 264H360v-80h68v32c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-32h152v32c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-32h68v576z'></path>
    </svg>
  );
};
