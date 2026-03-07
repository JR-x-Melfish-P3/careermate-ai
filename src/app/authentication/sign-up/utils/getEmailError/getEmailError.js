import { isEmail, isEmpty } from "validator";
import getError from "../../../utils/getError";

const getEmailError = (email) =>
  getError(email, [
    {
      match: (value) => isEmpty(value),
      message: "Please enter your email",
    },
    {
      match: (value) => !isEmail(value),
      message: "Please enter a valid email address",
    },
  ]);

export default getEmailError;
