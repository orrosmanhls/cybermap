// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;
    backgroundColor: string;

    breakpoints: {
      mobile: string;
      tablet: string;
      desktop: string;
      bigScreen: string;
    };
    colors: {
      primary: {
        main: string;
        dark: string;
        light: string;
      };
      secondary: {
        main: string;
        dark: string;
        light: string;
      };
    };
    typography: {
      fonts: string[];
      fontSizes: {
        smaller: string;
        small: string;
        regular: string;
        medium: string;
        large: string;
      };
      fontWeights: {
        light: number;
        regular: number;
        medium: number;
        bold: number;
        bolder: number;
      };
    };
    spacing: (digit: number) => string;
  }
}
