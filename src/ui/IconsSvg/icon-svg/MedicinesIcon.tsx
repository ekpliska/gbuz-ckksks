import React from 'react';
import { IconsSvgProps } from '../types';

export const MedicinesIcon: React.FC<IconsSvgProps> = ({
  width,
  height,
  fill,
}): React.ReactElement => {
  return (
    <svg
      viewBox='64 64 896 896'
      focusable='false'
      data-icon='medicines'
      width={width ?? '1em'}
      height={height ?? '1em'}
      fill={fill ?? '#B4B9C3'}
      aria-hidden='true'
    >
      <path d='M832 64H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm-600 72h560v208H232V136zm560 480H232V408h560v208zm0 272H232V680h560v208zM304 240a40 40 0 1080 0 40 40 0 10-80 0zm0 272a40 40 0 1080 0 40 40 0 10-80 0zm0 272a40 40 0 1080 0 40 40 0 10-80 0z'></path>
    </svg>
  );
};
