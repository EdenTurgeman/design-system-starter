import React from 'react';
import renderer from 'react-test-renderer';
import { Flex } from "./Flex";

test('Link changes the class when hovered', () => {
    const component = renderer.create(
        <Flex>Facebook</Flex>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});