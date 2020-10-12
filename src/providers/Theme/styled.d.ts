import 'styled-components';

import defaultTheme from './theme';

declare module 'styled-components' {
  type Theme = defaultTheme;
  export type DefaultTheme = Theme;
}
