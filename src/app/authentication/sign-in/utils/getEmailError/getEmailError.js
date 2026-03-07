import { isEmpty } from "validator";
import getError from "../../../utils/getError";

const getEmailError = (email) =>
  getError(email, [
    {
      match: (value) => isEmpty(value),
      message: "Please enter your email",
    },
  ]);

export default getEmailError;
