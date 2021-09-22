import { render, screen } from "../../../../test-utils";

import Search from "./Search";

test("Search should render props", () => {
  const text = "text";
  render(<Search />);
  expect(screen.getByTestId("search")).toHaveTextContent(text);
});
