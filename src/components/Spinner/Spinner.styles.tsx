import styled from 'styled-components';
import React from 'react';

interface ISpinnerStyleProps {
  size: 'l' | 'm' | 's' | 'xl' | 'xs';
  role?: string;
  testId: string;
}

const sizes: Record<string, number> = {
  xs: 10,
  s: 20,
  m: 30,
  l: 45,
  xl: 90,
};

export const SpinnerSvg = ({ color }: { color: string }) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
    <defs>
      <linearGradient x1='28.154%' y1='63.74%' x2='74.629%' y2='17.783%' id={`${color}LoadingIndicatorGradient`}>
        <stop stopColor={color} offset='0%' />
        <stop stopColor={color} stopOpacity='0' offset='100%' />
      </linearGradient>
    </defs>
    <g transform='translate(2)' fill='none' fillRule='evenodd'>
      <circle stroke={`url(#${color}LoadingIndicatorGradient)`} strokeWidth='4' cx='10' cy='12' r='10' />
      <path d='M10 2C4.477 2 0 6.477 0 12' stroke={color} strokeWidth='4' />
    </g>
  </svg>
);

export const SpinnerContainer = styled.div<ISpinnerStyleProps>`
  width: ${({ size }) => sizes[size] ?? size}px;
  height: ${({ size }) => sizes[size] ?? size}px;
  font-size: 14px;
  line-height: 20px;
  border-width: 0;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.1);
  animation-name: spin;
  animation-duration: 500ms;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  transform-origin: center center;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
