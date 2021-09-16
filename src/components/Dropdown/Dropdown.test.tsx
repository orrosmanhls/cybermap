import { render, screen } from "../../test-utils";

import Dropdown from "./Dropdown";

test("Dropdown should render props", () => {
  const text = "text";
  render(<Dropdown text={text} />);
  expect(screen.getByTestId("dropdown")).toHaveTextContent(text);
});
