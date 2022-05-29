import React from 'react';
import { render } from '@testing-library/react';
import { Spinner } from '../Spinner.component';
import { lightTheme, ThemeProvider } from '../../../theme';

describe('Spinner', () => {
  test('should match snapshot for spinner', () => {
    const { container } = render(
      <ThemeProvider theme={lightTheme}>
        <Spinner />
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });

  test('should match snapshot for spinner sizes', () => {
    const { container } = render(
      <ThemeProvider theme={lightTheme}>
        <>
          <Spinner size={'xs'} />
          <Spinner size={'s'} />
          <Spinner size={'m'} />
          <Spinner size={'l'} />
          <Spinner size={'xl'} />
        </>
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });
  test('should match snapshot for spinner color', () => {
    const { container } = render(
      <ThemeProvider theme={lightTheme}>
        <>
          <Spinner color={'yellow.600'} />
          <Spinner color={'red.600'} />
          <Spinner color={'green.600'} />
        </>
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });
});
