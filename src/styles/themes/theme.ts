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
      small: "1rem",
      medium: "2rem",
      large: "3rem",
    },
    fontWeights: {
      light: 300,
      regular: 400,
      medium: 500,
      bold: 700,
    },
  },

  backgroundColor: "black",
  borderRadius: "3px",
};
