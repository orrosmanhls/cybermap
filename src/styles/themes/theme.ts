import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  breakpoints: {
    mobile: "480px",
    tablet: "768px",
    desktop: "1024px",
    bigScreen: "1200px",
  },
  colors: {
    primary: {
      main: "black",
      dark: "black",
      light: "grey",
    },
    secondary: {
      main: "white",
      dark: "white",
      light: "white",
    },
  },
  spacing: (digit) => `${8 * Math.pow(2, digit - 1)}px`,
  typography: {
    fonts: ["Montserrat", "Roboto", "sans-serif"],
    fontSizes: {
      smaller: "0.75rem",
      small: "1rem",
      medium: "1.25rem",
      large: "1.5rem",
    },
    fontWeights: {
      light: 300,
      regular: 400,
      medium: 500,
      bold: 700,
      bolder: 900,
    },
  },

  backgroundColor: "black",
  borderRadius: "3px",
};
