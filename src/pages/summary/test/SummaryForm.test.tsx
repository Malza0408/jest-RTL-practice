import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SummaryForm from "../SummaryForm";

test("SummaryForm initial setting", () => {
  render(<SummaryForm />);
  const checkbox = screen.getByRole("checkbox", { name: /i agree to/i });
  expect(checkbox).toBeInTheDocument();
});

test("disalbed button when click checkbox", () => {
  render(<SummaryForm />);
  const checkbox = screen.getByRole("checkbox", { name: /i agree to/i });
  const button = screen.getByRole("button", { name: /confirm order/i });
  userEvent.click(checkbox);
  expect(button).toBeEnabled();
  userEvent.click(checkbox);
  expect(button).toBeDisabled();
});
