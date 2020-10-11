import { createGlobalStyle } from 'styled-components';

import { TTheme } from '.';

const applyThemeSizes = (theme: TTheme) => {
  return Object.keys(theme.typography)
    .map((element) => `${element} {font-size: ${theme.typography[element]}px;}`)
    .join('\n');
};

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    line-height: 1.5;
    font-family: 'Lato', sans-serif;
  }
  body {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
  }
  h1, h2, h3, h4, h5 {
    font-family: 'Crimson Text', serif;
  }

  h1,h2,h3,h4,h5,p,span,li {
    &.enphasis {
        background: linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(34,34,135,0) 33%, ${({
          theme,
        }) => (theme as TTheme).colors.brand} 33%, ${({ theme }) =>
  (theme as TTheme).colors
    .brand} 66%, rgba(18,97,178,0) 66%, rgba(255,255,255,0) 100%);
    }
  }

  ${({ theme }) => applyThemeSizes(theme as TTheme)}
`;
