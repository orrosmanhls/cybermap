import { render, screen } from "../../test-utils";

import Navbar from "./Navbar";

test("Navbar should render props", () => {
  const text = "text";
  render(<Navbar text={text} />);
  expect(screen.getByTestId("navbar")).toHaveTextContent(text);
});
