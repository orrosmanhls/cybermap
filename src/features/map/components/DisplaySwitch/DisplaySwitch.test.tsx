import { render, screen } from "../../../../test-utils";

import DisplaySwitch from "./DisplaySwitch";

test("DisplaySwitch should render props", () => {
  const text = "text";
  render(<DisplaySwitch text={text} />);
  expect(screen.getByTestId("display-switch")).toHaveTextContent(text);
});
