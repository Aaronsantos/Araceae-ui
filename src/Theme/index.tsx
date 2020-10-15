import React from 'react';
import { ThemeProvider as StyledProvider } from 'styled-components';

import { GlobalStyles } from './globalStyle';
import defaultTheme from './theme';
import '../assets/static/css/typographyImports.css';
// import { Container } from './styles';

export type TTheme = typeof defaultTheme;

type TThemeProvider = {
  theme?: TTheme;
};

const mergeTheme = (defaultThemeValues: TTheme, currentValues) => {
  const colors = { ...defaultThemeValues.colors, ...currentValues.colors };
  const typography = {
    ...defaultThemeValues.typography,
    ...currentValues.typography,
  };

  return { colors, typography };
};

const ThemeProvider: React.FC<TThemeProvider> = ({
  children,
  theme = defaultTheme,
}) => (
  <StyledProvider theme={mergeTheme(defaultTheme, theme)}>
    <GlobalStyles />
    {children}
  </StyledProvider>
);

export default ThemeProvider;
