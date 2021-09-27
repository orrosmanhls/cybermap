import { render, screen } from "../../../../test-utils";

import Category from "./Category";

test("Category should render props", () => {
  const text = "text";
  render(<Category text={text} />);
  expect(screen.getByTestId("category")).toHaveTextContent(text);
});
