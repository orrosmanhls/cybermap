import { render, screen } from "../../../../test-utils";

import CompanyCard from "./CompanyCard";

test("CompanyCard should render props", () => {
  const text = "text";
  render(<CompanyCard />);
  expect(screen.getByTestId("company-card")).toHaveTextContent(text);
});
