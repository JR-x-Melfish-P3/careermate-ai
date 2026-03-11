"use client";

import { useState } from "react";

const useForm = ({ fields, validation }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [data, setData] = useState(() => {
    const initialData = {};

    fields.forEach((field) => {
      initialData[field] = "";
    });

    return initialData;
  });

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
