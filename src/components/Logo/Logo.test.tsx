import { render, screen } from "../../test-utils";

import Logo from "./Logo";

test("Logo should render props", () => {
  const text = "text";
  render(<Logo text={text} />);
  expect(screen.getByTestId("logo")).toHaveTextContent(text);
});
