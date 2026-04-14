"use client";

import { useState } from "react";

const useForm = ({ fields, schema, initialData = {} }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [data, setData] = useState(() =>
    Object.fromEntries(
      fields.map((field) => [field, initialData[field] ?? ""]),
    ),
  );

  const onChange = (field) => (event) => {
    setData((previousData) => ({
      ...previousData,
      [field]: event.target.value,
    }));
  };

  const result = schema.safeParse(data);

  const error = result.success
    ? {}
    : Object.fromEntries(
        result.error?.issues.map((err) => [err.path[0], err.message]),
      );

  const onSubmit = (handleSubmit) => (event) => {
    event.preventDefault();

    setIsSubmitted(true);

    const hasError = Object.keys(error).length > 0;

    if (hasError) {
      return;
    }

    handleSubmit();
  };

  return {
    onChange,
    data,
    onSubmit,
    isSubmitted,
    error,
  };
};

export default useForm;
