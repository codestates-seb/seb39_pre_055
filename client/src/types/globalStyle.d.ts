import { ThemeProps } from 'styled-components';

declare namespace GlobalStyled {
  interface AppTheme {
    breakPoints: {
      mobile: string;
      tablet: string;
    };
  }
  export type Theme = ThemeProps<AppTheme>;
}

export = GlobalStyled;
