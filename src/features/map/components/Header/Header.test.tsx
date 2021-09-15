import { render, screen } from "../../../../test-utils";

import Header from "./Header";

test("Header should render props", () => {
  const text = "text";
  render(<Header />);
  expect(screen.getByTestId("header")).toHaveTextContent(text);
});
