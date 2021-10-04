import * as React from 'react';
import { Flex } from '../src';
import styled from 'styled-components';

export default {
  title: 'Containers/Flex',
  component: Flex,
};

const StyledCube = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-style: solid;
  border-width: 2px;
  border-color: #607d8b;
`;
const Cube = () => <StyledCube>wow</StyledCube>;

export const Basic = () => <Flex>I love the way flex wraps around me ;) </Flex>;

export const Gap = () => (
  <Flex gap={40}>
    <Cube />
    <Cube />
    <Cube />
  </Flex>
);

export const Direction = () => (
  <Flex flexDirection={'column'} gap={20}>
    <Cube />
    <Cube />
    <Cube />
  </Flex>
);
