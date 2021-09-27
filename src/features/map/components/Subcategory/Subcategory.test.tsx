import { render, screen } from "../../../../test-utils";

import Subcategory from "./Subcategory";

test("Subcategory should render props", () => {
  const text = "text";
  render(<Subcategory text={text} />);
  expect(screen.getByTestId("subcategory")).toHaveTextContent(text);
});
