import getPasswordError from "./getPasswordError";

describe("getPasswordError", () => {
  test("returns error message when password is empty", () => {
    expect(getPasswordError("")).toBe("Please enter your password");
  });

  test("returns error message when password is not strong", () => {
    expect(getPasswordError("weak")).toBe(
      "Password must be at least 8 characters long",
    );
  });
});
