import { render, screen } from "../../test-utils";

import SocialIcon from "./SocialIcon";

test("SocialIcon should render props", () => {
  const text = "text";
  render(<SocialIcon text={text} />);
  expect(screen.getByTestId("social-icon")).toHaveTextContent(text);
});
