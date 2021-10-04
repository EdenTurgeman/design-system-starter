import React, { FunctionComponent } from 'react';
import { flexbox, FlexboxProps } from 'styled-system';
import styled from 'styled-components';

export interface FlexProps extends FlexboxProps {
  gap?: number;
}

const StyledFlex = styled.div<FlexProps>`
  display: flex;
  ${flexbox};
  gap: ${({ gap }) => gap}px;
`;

export const Flex: FunctionComponent<FlexProps> = (props: any) => <StyledFlex {...props} />;
