import auth from "@/app/apis/auth";
import {
  AuthenticationContext,
  AuthenticationProvider,
} from "@/app/contexts/Authentication";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useRouter } from "next/navigation";
import { expect } from "vitest";
import SignUpPage from "./page";

vi.mock("next/navigation");

describe("Form", () => {
  test("renders sign up form", () => {
    render(<SignUpPage />, {
      wrapper: ({ children }) => (
        <AuthenticationProvider>{children}</AuthenticationProvider>
      ),
    });

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

    render(<SignUpPage />, {
      wrapper: ({ children }) => (
        <AuthenticationProvider>{children}</AuthenticationProvider>
      ),
    });

    await user.click(screen.getByRole("button", { name: "Create Account" }));

    expect(screen.getByText("Please enter your full name")).toBeInTheDocument();
    expect(screen.getByText("Please enter your email")).toBeInTheDocument();
    expect(screen.getByText("Please enter your password")).toBeInTheDocument();
  });

  test("redirects to dashboard on successful sign up", async () => {
    const user = userEvent.setup();
    const push = vi.fn();
    useRouter.mockReturnValue({ push });

    vi.spyOn(auth, "post").mockResolvedValue();

    const signIn = vi.fn();

    render(<SignUpPage />, {
      wrapper: ({ children }) => (
        <AuthenticationContext.Provider value={{ signIn }}>
          {children}
        </AuthenticationContext.Provider>
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

    expect(auth.post).toBeCalledWith("/auth/sign-up", {
      fullName: "John Doe",
      email: "john.doe@example.com",
      password: "Password",
    });

    expect(signIn).toBeCalled();

    expect(push).toBeCalledWith("/dashboard");
  });

  test("displays server error message on sign up failure", async () => {
    const user = userEvent.setup();
    const push = vi.fn();
    useRouter.mockReturnValue({ push });

    vi.spyOn(auth, "post").mockRejectedValue({
      response: { status: 409 },
    });

    render(<SignUpPage />, {
      wrapper: ({ children }) => (
        <AuthenticationProvider>
          {children}
          <div id="dialog-root"></div>
        </AuthenticationProvider>
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
