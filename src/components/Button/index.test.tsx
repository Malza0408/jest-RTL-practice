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

test("initial conditions", () => {
  render(<Button />);
  const colorButton = screen.getByRole("button", { name: /click!/i });
  expect(colorButton).toBeEnabled();
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

test("check button enabled when click checkbox", () => {
  render(<Button />);
  const checkbox = screen.getByRole("checkbox");
  const colorButton = screen.getByRole("button", { name: /click!/i });

  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();

  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
});
