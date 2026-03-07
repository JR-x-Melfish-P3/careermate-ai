import getEmailError from "./getEmailError";

describe("getEmailError", () => {
  test("returns error message when email is empty", () => {
    expect(getEmailError("")).toBe("Please enter your email");
  });

  test("returns error message when email is invalid", () => {
    expect(getEmailError("invalid-email")).toBe(
      "Please enter a valid email address",
    );
  });
});
