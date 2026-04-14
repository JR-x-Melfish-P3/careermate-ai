import { isEmpty } from "validator";
import getError from "@/app/authentication/_utils/getError";

const getFullNameError = (fullName) =>
  getError(fullName, [
    {
      match: (value) => isEmpty(value, { ignore_whitespace: true }),
      message: "Full name is required",
    },
  ]);

export default getFullNameError;
