import React, { FunctionComponent } from 'react';
import { flex, FlexProps as StyledSystemFlex } from 'styled-system';
import styled from 'styled-components';

interface FlexProps extends StyledSystemFlex {
}

const StyledFlex = styled.div<FlexProps>`
    display: flex;
    width: 200px;
    background-color: red;
    ${flex};
`;

export const Flex: FunctionComponent<FlexProps> = props  => (
  <StyledFlex {...props}/>
);
