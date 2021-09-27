import React from "react";
import { ThemeProvider } from "styled-components";

import { theme } from "./styles/themes/theme";
import { AppWrapper, GlobalStyles } from "./styles/globalStyles";
import AppRouter from "./router";
import { ModalProvider } from "./contexts/ModalContext";
// import { useApiEffect } from "./hooks/useApi";

// const mockAuthentication = () =>
//   new Promise((resolve) => setTimeout(() => resolve("auth"), 2000));

const App: React.FC = () => {
  // const modalIsOpen: boolean = useModal();
  // TODO: replace with authentication and init functions
  // const [, loading] = useApiEffect(mockAuthentication);

  return (
    <ModalProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <AppWrapper>
          <AppRouter />
        </AppWrapper>
      </ThemeProvider>
    </ModalProvider>
  );
};

export default App;
