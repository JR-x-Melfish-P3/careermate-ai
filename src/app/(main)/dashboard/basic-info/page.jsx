"use client";

import Field from "@/app/_components/Field";
import Button from "@/app/_components/Button";
import useForm from "@/app/_hooks/useForm";
import getFullNameError from "./_utils/getFullNameError";
import { useAuthentication } from "@/app/_contexts/Authentication";
import axios from "axios";

const BasicInfoPage = () => {
  const { user } = useAuthentication();

  const { data, onChange, onSubmit, error, isSubmitted } = useForm({
    fields: ["fullName", "displayName"],
    validation: {
      fullName: getFullNameError,
    },
    initialData: { fullName: user.fullName },
  });

  const handleSave = async () => {
    const response = await axios.put("/api/user/basic-info", data);

    console.log(response.data);
  };

  return (
    <form onSubmit={onSubmit(handleSave)}>
      <h2 className="text-lg font-semibold text-gray-900 mb-6">Basic Info</h2>
      <Field
        label="Full Name"
        value={data.fullName}
        onChange={onChange("fullName")}
        error={isSubmitted && error.fullName}
      />
      <Field
        label="Display Name"
        optional
        value={data.displayName}
        onChange={onChange("displayName")}
        placeholder="How your name appears in the app"
      />
      <Button>Save Changes</Button>
    </form>
  );
};

export default BasicInfoPage;
