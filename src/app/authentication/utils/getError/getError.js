const getError = (value, errors) =>
  errors.find((error) => error.match(value))?.message || "";

export default getError;
