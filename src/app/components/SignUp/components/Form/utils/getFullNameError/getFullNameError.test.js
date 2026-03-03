import getFullNameError from "./getFullNameError";

describe("getFullNameError", () => {
  test("returns error message when full name is empty", () => {
    expect(getFullNameError("")).toBe("Please enter your full name");
  });
});
