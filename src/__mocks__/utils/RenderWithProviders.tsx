import React from 'react';
import ThemeProvider from '../../Theme';

export const withThemeProvider = (component) => (
  <ThemeProvider>{component}</ThemeProvider>
);
