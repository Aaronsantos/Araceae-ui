import React from 'react';
import { ThemeProvider as StyledProvider } from 'styled-components';

import defaultTheme from './theme';
// import { Container } from './styles';

type TTheme = typeof defaultTheme;

declare module 'styled-components' {
  type Theme = TTheme;
  export type DefaultTheme = Theme;
}

type TThemeProvider = {
  theme?: TTheme;
};

const ThemeProvider: React.FC<TThemeProvider> = ({
  children,
  theme = defaultTheme,
}) => <StyledProvider theme={theme}>{children}</StyledProvider>;

export default ThemeProvider;
