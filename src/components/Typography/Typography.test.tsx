import { render, screen } from "../../test-utils";

import Typography from "./Typography";

test("Typography should render props", () => {
  const text = "text";
  render(<Typography text={text} />);
  expect(screen.getByTestId("typography")).toHaveTextContent(text);
});
