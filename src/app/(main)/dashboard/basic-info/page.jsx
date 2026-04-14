"use client";

import Field from "@/app/_components/Field";
import Button from "@/app/_components/Button";
import useForm from "@/app/_hooks/useForm";
import { useAuthentication } from "@/app/_contexts/Authentication";
import { useToast } from "@/app/_contexts/Toast";
import axios from "axios";
import z from "zod";

const schema = z.object({
  fullName: z.string().nonempty("Full Name is required"),
  displayName: z.string().optional(),
});

const BasicInfoPage = () => {
  const { user, mutate } = useAuthentication();
  const { addToast } = useToast();

  const { data, onChange, onSubmit, error, isSubmitted } = useForm({
    fields: ["fullName", "displayName"],
    schema,
    initialData: { fullName: user.fullName, displayName: user.displayName },
  });

  const handleSave = async () => {
    await axios.put("/api/auth/user/basic-info", data);
    await mutate();

    addToast("Basic info updated successfully");
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
