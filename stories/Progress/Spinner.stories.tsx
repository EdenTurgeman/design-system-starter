import React from 'react';
import type { SpinnerProps } from '../../src';
import { Flex, Spinner } from '../../src';

export default {
  title: 'Progress & Loading/Spinner',
  component: Spinner,
};

export const Basic = (props: SpinnerProps) => <Spinner {...props} />;

export const Sizes = () => (
  <Flex gap={4}>
    <Spinner size={'s'} color={'red.600'} />
    <Spinner size={'m'} color={'green.600'} />
    <Spinner size={'l'} color={'blue.600'} />
    <Spinner size={'xl'} color={'yellow.600'} />
  </Flex>
);

Basic.args = {
  color: '',
  size: 'm',
};

Basic.storyName = 'Spinner';
