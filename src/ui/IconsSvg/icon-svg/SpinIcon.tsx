import React from 'react';
import { IconsSvgProps } from '../types';

export const SpinIcon: React.FC<IconsSvgProps> = ({ width, height }): React.ReactElement => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width || '24'}
      height={height || '24'}
      version='1'
      viewBox='0 0 128 128'
    >
      <g>
        <linearGradient id='linear-gradient'>
          <stop offset='0%' stopColor='#086FA1' />
          <stop fillOpacity='0.56' offset='100%' stopColor='#63ADD0' />
        </linearGradient>
        <linearGradient id='linear-gradient2'>
          <stop offset='0%' stopColor='#086FA1' />
          <stop fillOpacity='0.19' offset='100%' stopColor='#D6F0FF' />
        </linearGradient>
        <path
          fill='url(#linear-gradient)'
          fillRule='evenodd'
          d='M64 .98A63.02 63.02 0 11.98 64 63.02 63.02 0 0164 .98zm0 15.76A47.26 47.26 0 1116.74 64 47.26 47.26 0 0164 16.74z'
        />
        <path
          fill='url(#linear-gradient2)'
          fillRule='evenodd'
          d='M64.12 125.54A61.54 61.54 0 11125.66 64a61.54 61.54 0 01-61.54 61.54zm0-121.1A59.57 59.57 0 10123.7 64 59.57 59.57 0 0064.1 4.43zM64 115.56a51.7 51.7 0 1151.7-51.7 51.7 51.7 0 01-51.7 51.7zM64 14.4a49.48 49.48 0 1049.48 49.48A49.48 49.48 0 0064 14.4z'
        />
        <animateTransform
          attributeName='transform'
          dur='400ms'
          from='0 64 64'
          repeatCount='indefinite'
          to='360 64 64'
          type='rotate'
        />
      </g>
    </svg>
  );
};
