import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';

import { withThemeProvider } from '../__mocks__/utils/RenderWithProviders';
import defaultTheme from '../Theme/theme';
import TextArea from '.';

afterEach(() => cleanup());

describe('TextArea component', () => {
  it('Should render with passed values', () => {
    const { getByDisplayValue } = render(
      withThemeProvider(
        <TextArea
          onChange={() => undefined}
          value="test"
          placeholder="a placeholder"
        />
      )
    );
    const inputElement = getByDisplayValue('test');

    expect(inputElement).toHaveValue('test');
    expect(inputElement).toHaveAttribute('placeholder', 'a placeholder');
  });

  it('Should fire change event', () => {
    const onChange = jest.fn();
    const { getByDisplayValue } = render(
      withThemeProvider(
        <TextArea
          onChange={onChange}
          value="test"
          placeholder="a placeholder"
        />
      )
    );
    const inputElement = getByDisplayValue('test');
    fireEvent.change(inputElement, { target: { value: 'new value' } });
    expect(onChange).toHaveBeenCalled();
  });

  it('Should have expected styles', () => {
    const { getByDisplayValue } = render(
      withThemeProvider(
        <TextArea
          onChange={() => undefined}
          value="test"
          placeholder="a placeholder"
        />
      )
    );
    const inputElement = getByDisplayValue('test');

    expect(inputElement).toHaveStyleRule('width', '100%');
    expect(inputElement).toHaveStyleRule('padding-bottom', '0.8em');
    expect(inputElement).toHaveStyleRule('line-height', '1.5em');
    expect(inputElement).toHaveStyleRule(
      'border-bottom',
      `1px solid ${defaultTheme.colors.black}`
    );
    expect(inputElement).toHaveStyleRule(
      'font-size',
      `${defaultTheme.typography.body}px`
    );
  });
});
