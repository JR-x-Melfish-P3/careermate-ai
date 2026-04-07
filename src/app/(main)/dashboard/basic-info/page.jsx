"use client";

import Field from "@/app/components/Field";
import Button from "@/app/components/Button";
import useForm from "@/app/hooks/useForm";
import getFullNameError from "./utils/getFullNameError";

const BasicInfoPage = () => {
  const { data, onChange, onSubmit, error, isSubmitted } = useForm({
    fields: ["fullName", "displayName"],
    validation: {
      fullName: getFullNameError,
    },
    initialData: { fullName: "Ray Zhang" },
  });

  const handleSave = () => {
    // TODO: addToast('Saved successfully')
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
