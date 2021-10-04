import React from 'react';
import renderer from 'react-test-renderer';
import { Flex } from './Flex.component';

test('Basic', () => {
  const component = renderer.create(<Flex>Facebook</Flex>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Flex with gaps', () => {
  const component = renderer.create(<Flex gap={20}>Facebook</Flex>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
