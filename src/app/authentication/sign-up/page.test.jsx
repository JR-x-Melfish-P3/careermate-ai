import { render, screen, within } from "@testing-library/react";
import SignUpPage from "./page";
import userEvent from "@testing-library/user-event";
import { useRouter } from "next/navigation";
import axios from "axios";

vi.mock("next/navigation");

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

  test("redirects to dashboard on successful sign up", async () => {
    const user = userEvent.setup();
    const push = vi.fn();
    useRouter.mockReturnValue({ push });

    vi.spyOn(axios, "post").mockResolvedValue();

    render(<SignUpPage />);

    await user.type(
      screen.getByRole("textbox", { name: "Full Name" }),
      "John Doe",
    );

    await user.type(
      screen.getByRole("textbox", { name: "Email" }),
      "john.doe@example.com",
    );
    await user.type(screen.getByLabelText("Password"), "Password");

    await user.click(screen.getByRole("button", { name: "Create Account" }));

    expect(push).toBeCalledWith("/dashboard");
  });

  test("displays server error message on sign up failure", async () => {
    const user = userEvent.setup();
    const push = vi.fn();
    useRouter.mockReturnValue({ push });

    vi.spyOn(axios, "post").mockRejectedValue({
      response: { status: 409 },
    });

    render(<SignUpPage />, {
      wrapper: ({ children }) => (
        <>
          {children}
          <div id="dialog-root" />
        </>
      ),
    });

    await user.type(
      screen.getByRole("textbox", { name: "Full Name" }),
      "John Doe",
    );

    await user.type(
      screen.getByRole("textbox", { name: "Email" }),
      "john.doe@example.com",
    );
    await user.type(screen.getByLabelText("Password"), "Password");

    await user.click(screen.getByRole("button", { name: "Create Account" }));

    expect(
      screen.getByText("Email already registered, please log in instead"),
    ).toBeInTheDocument();
  });
});
