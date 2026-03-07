import { render, screen, within } from "@testing-library/react";
import SignUpPage from "./page";
import userEvent from "@testing-library/user-event";

describe("Form", () => {
  test("renders sign up form", () => {
    render(<SignUpPage />);

    expect(
      screen.getByRole("textbox", { name: "Full Name" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: "Email" })).toBeInTheDocument();
    expect(screen.getByLabelText("Password")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Create Account" }),
    ).toBeInTheDocument();
  });

  test("render error message when input is invalid after form submission", async () => {
    const user = userEvent.setup();

    render(<SignUpPage />);

    await user.click(screen.getByRole("button", { name: "Create Account" }));

    expect(screen.getByText("Please enter your full name")).toBeInTheDocument();
    expect(screen.getByText("Please enter your email")).toBeInTheDocument();
    expect(screen.getByText("Please enter your password")).toBeInTheDocument();
  });
});
