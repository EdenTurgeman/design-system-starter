import type { FunctionComponent } from 'react';
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { get } from 'lodash';
import { SpinnerContainer, SpinnerSvg } from './Spinner.styles';
import { Color } from '../../theme';

export interface SpinnerProps {
  size?: 'l' | 'm' | 's' | 'xl' | 'xs';
  color?: Color;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  'data-testId'?: string;
}

export const Spinner: FunctionComponent<SpinnerProps> = ({ size = 'm', color, ...props }) => {
  const theme = useContext(ThemeContext);

  const spinnerColor = color ? get(theme.colors, color) ?? color : theme.spinner.color;

  return (
    <SpinnerContainer testId={props['data-testId'] ?? 'spinner'} role={'progressbar'} size={size} {...props}>
      <SpinnerSvg color={spinnerColor} />
    </SpinnerContainer>
  );
};

Spinner.displayName = 'Spinner';
