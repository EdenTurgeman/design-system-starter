import { css } from 'styled-components';
import { borderColor } from 'styled-system';

export const disabledCardStyles = (props: any) =>
  props.disabled &&
  css`
    background-color: gray;
    pointer-events: none;
    opacity: 0.8;
  `;

export const onClickStyle = (props: any) =>
  props.onClick &&
  css`
    cursor: pointer;
  `;

export const accentCardStyles = ({ theme, accentColor, accentLocation, focused }: any) =>
  accentColor &&
  focused !== false &&
  css`
    border-radius: 0;
    ${`border-${accentLocation}: 4px solid ${borderColor({ theme, borderColor: accentColor }).borderColor}`};
  `;

export const borderlessCardStyle = (props: any) =>
  props.borderless &&
  css`
    border-width: 0;
  `;
