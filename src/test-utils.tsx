import React from "react";
import { render, RenderOptions } from "@testing-library/react";

const AllTheProviders: React.FC = ({ children }) => {
  return <>{children}</>;
};

const customRender = (
  ui: React.ReactElement<any, string | React.JSXElementConstructor<any>>,
  options?: RenderOptions
) => render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
