import { isEmpty, isStrongPassword } from "validator";
import getError from "../getError";

const getPasswordError = (password) =>
  getError(password, [
    {
      match: (value) => isEmpty(value),
      message: "Please enter your password",
    },
    {
      match: (value) =>
        !isStrongPassword(value, {
          minLowercase: 0,
          minUppercase: 0,
          minNumbers: 0,
          minSymbols: 0,
        }),
      message: "Password must be at least 8 characters long",
    },
  ]);

export default getPasswordError;
