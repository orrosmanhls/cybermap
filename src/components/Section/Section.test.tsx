import { render, screen } from "../../test-utils";

import Section from "./Section";

test("Section should render props", () => {
  const text = "text";
  render(<Section />);
  expect(screen.getByTestId("section")).toHaveTextContent(text);
});
