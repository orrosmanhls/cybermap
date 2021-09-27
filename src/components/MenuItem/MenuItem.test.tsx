import { render, screen } from "../../test-utils";

import MenuItem from "./MenuItem";

test("MenuItem should render props", () => {
  const text = "text";
  render(<MenuItem text={text} />);
  expect(screen.getByTestId("menu-item")).toHaveTextContent(text);
});
