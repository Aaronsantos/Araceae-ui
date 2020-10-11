import React from 'react';
import { render } from '@testing-library/react';
import ThemeProvider from '../../providers/Theme';

export const renderWithProviders = (component) =>
  render(<ThemeProvider>{component}</ThemeProvider>);
