import React from "react";
import { ThemeProvider } from "styled-components";

import { theme } from "./styles/themes/theme";
import { AppWrapper, GlobalStyles } from "./styles/globalStyles";
import AppRouter from "./router";
// import { useApiEffect } from "./hooks/useApi";

// const mockAuthentication = () =>
//   new Promise((resolve) => setTimeout(() => resolve("auth"), 2000));

const App: React.FC = () => {
  // TODO: replace with authentication and init functions
  // const [, loading] = useApiEffect(mockAuthentication);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppWrapper>
        <AppRouter />
      </AppWrapper>
    </ThemeProvider>
  );
};

export default App;
