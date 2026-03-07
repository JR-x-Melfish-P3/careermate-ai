import { isEmpty } from "validator";
import getError from "../../../utils/getError";

const getPasswordError = (password) =>
  getError(password, [
    {
      match: (value) => isEmpty(value),
      message: "Please enter your password",
    },
  ]);

export default getPasswordError;
