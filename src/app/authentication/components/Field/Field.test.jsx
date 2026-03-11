import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Field from "./Field";

describe("Field", () => {
  test("renders label and input", () => {
    render(
      <Field
        label="Email"
        type="text"
        value="alice@email.com"
        onChange={vi.fn()}
        placeholder="Please type your email"
      />,
    );

    expect(screen.getByRole("textbox", { name: "Email" })).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: "Email" })).toHaveAttribute(
      "type",
      "text",
    );

    expect(screen.getByRole("textbox", { name: "Email" })).toHaveAttribute(
      "placeholder",
      "Please type your email",
    );

    expect(screen.getByRole("textbox", { name: "Email" })).toHaveAttribute(
      "value",
      "alice@email.com",
    );
  });

  test("renders show password button when type is password", async () => {
    const user = userEvent.setup();

    render(
      <Field
        label="Password"
        type="password"
        value="PASSWORD123"
        onChange={vi.fn()}
      />,
    );

    expect(screen.getByLabelText("Password")).toHaveAttribute(
      "type",
      "password",
    );

    expect(
      screen.getByRole("button", { name: "Show Password" }),
    ).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "Show Password" }));

    expect(screen.getByRole("textbox", { name: "Password" })).toHaveAttribute(
      "type",
      "text",
    );

    expect(screen.getByRole("textbox", { name: "Password" })).toHaveAttribute(
      "value",
      "PASSWORD123",
    );

    expect(
      screen.queryByRole("button", { name: "Show Password" }),
    ).not.toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: "Hide Password" }),
    ).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Hide Password" }));
    expect(screen.getByLabelText("Password")).toHaveAttribute(
      "type",
      "password",
    );

    expect(
      screen.queryByRole("button", { name: "Hide Password" }),
    ).not.toBeInTheDocument();
  });

  test("renders error message", () => {
    render(
      <Field
        label="Email"
        type="text"
        value="alice@email.com"
        onChange={vi.fn()}
        placeholder="Please type your email"
        error="Invalid email address"
      />,
    );

    expect(
      within(screen.getByRole("alert")).getByText("Invalid email address"),
    ).toBeInTheDocument();
  });

  test("calls onChange on type in textbox", async () => {
    const onChange = vi.fn();

    const user = userEvent.setup();

    render(<Field label="Email" value="" onChange={onChange} />);

    await user.type(
      screen.getByRole("textbox", { name: "Email" }),
      "alice@email.com",
    );

    expect(onChange).toHaveBeenCalled();
  });
});
