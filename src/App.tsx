import React from "react";

import { AppWrapper } from "./globalStyles";
import { useApiEffect } from "./hooks/useApi";
import AppRouter from "./router";

const mockAuthentication = () =>
  new Promise((resolve) => setTimeout(() => resolve("auth"), 2000));

const App: React.FC = () => {
  // TODO: replace with authentication and init functions
  const [, loading] = useApiEffect(mockAuthentication);

  return (
    <AppWrapper>{!loading ? <AppRouter /> : <p>Loading...</p>}</AppWrapper>
  );
};

export default App;
