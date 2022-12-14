import { fireEvent, render, screen } from "@testing-library/react";
import { logRoles } from "@testing-library/react";
import Button from ".";

test("button has red color", () => {
  const { container } = render(<Button />);
  logRoles(container);
  const buttonElement = screen.getByRole("button", { name: /click!/i });
  expect(buttonElement).toHaveStyle("backgroundColor: red");
});

test("button turns blue when clicked", () => {
  render(<Button />);
  const colorButton = screen.getByRole("button", { name: /click!/i });
  expect(colorButton).toHaveStyle("backgroundColor: red");
  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle("backgroundColor: blue");
});
