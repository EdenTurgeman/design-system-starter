import React, { FunctionComponent, forwardRef, Ref } from 'react';
import styled from 'styled-components';
import {
  color,
  width,
  height,
  space,
  shadow,
  maxWidth,
  MarginProps,
  MaxWidthProps,
  PaddingProps,
  BackgroundColorProps,
  HeightProps,
  WidthProps,
  BorderRadiusProps,
  borderRadius,
} from 'styled-system';
import { disabledCardStyles, borderlessCardStyle, onClickStyle } from './Card.styles';

interface ICardProps extends MarginProps, PaddingProps, BackgroundColorProps, HeightProps, WidthProps, BorderRadiusProps, MaxWidthProps {
  shadow?: 'none' | 'small' | 'large';
  accentLocation?: 'top' | 'right' | 'bottom' | 'left';
  borderless?: boolean;
  focused?: boolean;
  disabled?: boolean;
  subject?: string;
  boxShadow?: 'none' | 'small' | 'large';
  className?: string;
  onClick?(): void;
  ref?: Ref<HTMLDivElement>;
  context?: string;
  sticky?: boolean;
}

const StyledCard = styled.div<ICardProps>`
  border-radius: 3px;

  ${disabledCardStyles}
  ${borderlessCardStyle}
  ${onClickStyle}

  ${borderRadius}
  ${space}
  ${height}
  ${width}
  ${color}
  ${shadow}
  ${height}
  ${maxWidth}
`;

export const Card: FunctionComponent<ICardProps> = forwardRef<HTMLDivElement, ICardProps>(
  ({ accentLocation = 'top', shadow = 'none', borderRadius = 4, ...props }, ref) => (
    <StyledCard ref={ref} accentLocation={accentLocation} boxShadow={shadow} borderRadius={borderRadius} {...props} />
  ),
);

Card.displayName = 'Card';
