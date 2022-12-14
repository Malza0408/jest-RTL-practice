import { render, screen } from "@testing-library/react";
import { logRoles } from "@testing-library/react";
import Button from ".";

test("button has red color", () => {
  const { container } = render(<Button />);
  logRoles(container);
  const buttonElement = screen.getByRole("button", { name: /click!/i });
  expect(buttonElement).toHaveStyle("backgroundColor: red");
});
