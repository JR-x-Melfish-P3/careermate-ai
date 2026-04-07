"use client";

import { useState } from "react";

const useForm = ({ fields, validation, initialData = {} }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [data, setData] = useState(() =>
    Object.fromEntries(fields.map((field) => [field, initialData[field] ?? ""]))
  );

  const onChange = (field) => (event) => {
    setData((previousData) => ({
      ...previousData,
      [field]: event.target.value,
    }));
  };

  const error = {};
  Object.keys(validation).forEach((field) => {
    const result = validation[field](data[field]);

    if (!result) {
      return;
    }

    error[field] = result;
  });

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
