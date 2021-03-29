import React from 'react';
import { IconsSvgProps } from '../types';

export const DownArrowIcon: React.FC<IconsSvgProps> = ({
  width,
  height,
  fill,
}): React.ReactElement => {
  return (
    <svg
      viewBox='64 64 896 896'
      focusable='false'
      data-icon='down-arrow'
      width={width ?? '1em'}
      height={height ?? '1em'}
      fill={fill ?? '#B4B9C3'}
      aria-hidden='true'
    >
      <path d='M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z'></path>
    </svg>
  );
};

export const UpArrowIcon: React.FC<IconsSvgProps> = ({
  width,
  height,
  fill,
}): React.ReactElement => {
  return (
    <svg
      viewBox='64 64 896 896'
      focusable='false'
      data-icon='up-arrow'
      width={width ?? '1em'}
      height={height ?? '1em'}
      fill={fill ?? '#B4B9C3'}
      aria-hidden='true'
    >
      <path d='M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z'></path>
    </svg>
  );
};
