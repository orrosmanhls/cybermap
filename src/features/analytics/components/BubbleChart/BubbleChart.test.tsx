import { render, screen } from "../../../../test-utils";

import BubbleChart from "./BubbleChart";

test("BubbleChart should render props", () => {
  const text = "text";
  render(<BubbleChart />);
  expect(screen.getByTestId("bubble-chart")).toHaveTextContent(text);
});
