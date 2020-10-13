import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';

import ThemeProvider from '.';

describe('ThemeProvider', () => {
  it('Should call ThemeProvider styled-components api', () => {
    const result = TestRenderer.create(
      <ThemeProvider>
        <span>Test</span>
      </ThemeProvider>
    );

    const passed = result.toTree().rendered.type;
    expect(passed).toBe(StyledComponentsThemeProvider);
  });
});
