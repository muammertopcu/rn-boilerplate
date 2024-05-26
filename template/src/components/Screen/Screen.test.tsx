import React from 'react';
import {Text} from 'react-native';
import {render} from '@testing-library/react-native';
import Screen from './Screen';

describe('Screen component', () => {
  it('renders children correctly', () => {
    const {getByText} = render(
      <Screen>
        <Text>Hello World</Text>
      </Screen>,
    );

    expect(getByText('Hello World')).toBeTruthy();
  });
});
