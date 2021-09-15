import { render, screen } from "../../test-utils";

import Modal from "./Modal";

test("Modal should render props", () => {
  const text = "text";
  render(<Modal text={text} />);
  expect(screen.getByTestId("modal")).toHaveTextContent(text);
});
