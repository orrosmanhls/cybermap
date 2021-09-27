import { render, screen } from "../../test-utils";

import Sidebar from "./Sidebar";

test("Sidebar should render props", () => {
  const text = "text";
  render(<Sidebar />);
  expect(screen.getByTestId("sidebar")).toHaveTextContent(text);
});
