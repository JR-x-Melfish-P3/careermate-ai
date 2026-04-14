import { isEmpty } from "validator";
import getError from "../../../_utils/getError";

const getFullNameError = (fullName) =>
  getError(fullName, [
    {
      match: (value) => isEmpty(value),
      message: "Please enter your full name",
    },
  ]);

export default getFullNameError;
