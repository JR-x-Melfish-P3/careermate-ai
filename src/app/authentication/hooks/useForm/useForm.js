import { useState } from "react";

const useForm = ({ validation }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [data, setData] = useState({});

  const onChange = (event, key) => {
    setData((previousData) => ({
      ...previousData,
      [key]: event.target.value,
    }));
  };

  const onSubmit = (event, handleSubmit) => {
    event.preventDefault();

    setIsSubmitted(true);

    handleSubmit();
  };

  const error = {};
  Object.keys(validation).forEach((key) => {
    const result = validation[key](data[key]);

    if (!result) {
      return;
    }

    error[key] = result;
  });

  return {
    onChange,
    data,
    onSubmit,
    isSubmitted,
    error,
  };
};

export default useForm;
