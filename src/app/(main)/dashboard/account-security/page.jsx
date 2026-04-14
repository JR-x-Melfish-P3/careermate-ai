"use client";

import Button from "@/app/_components/Button";
import Field from "@/app/_components/Field";
import { useAuthentication } from "@/app/_contexts/Authentication";
import { useToast } from "@/app/_contexts/Toast";
import useForm from "@/app/_hooks/useForm";
import axios from "axios";
import z from "zod";

const schema = z
  .object({
    currentPassword: z.string().nonempty("Current password is required"),
    newPassword: z
      .string()
      .min(6, "New password must be at least 6 characters"),
    confirmNewPassword: z.string().nonempty("Please confirm your new password"),
  })
  .refine((data) => data.newPassword === data.confirmNewPassword, {
    path: ["confirmNewPassword"],
    message: "Passwords do not match",
  });

const AccountSecurityPage = () => {
  const { user } = useAuthentication();
  const { addToast } = useToast();

  const { data, onChange, onSubmit, error, isSubmitted } = useForm({
    fields: ["currentPassword", "newPassword", "confirmNewPassword"],
    schema,
  });

  const handleSave = async () => {
    await axios.put("/api/auth/user/account-security", data);
    addToast("Password updated successfully");
  };

  return (
    <form onSubmit={onSubmit(handleSave)}>
      <h2 className="text-lg font-semibold text-gray-900 mb-6">
        Account &amp; Security
      </h2>

      <Field
        hint="Your login email cannot be changed here. Contact support if needed."
        label="Email"
        readOnly
        value={user.email}
      />

      <div className="py-3 border-b border-gray-100 mb-4">Change Password</div>

      <Field
        label="Current Password"
        type="password"
        value={data.currentPassword}
        onChange={onChange("currentPassword")}
        placeholder="Enter current password to make changes"
        error={isSubmitted && error.currentPassword}
      />

      <Field
        label="New Password"
        type="password"
        value={data.newPassword}
        onChange={onChange("newPassword")}
        placeholder="Enter new password"
        error={isSubmitted && error.newPassword}
      />

      <Field
        label="Confirm New Password"
        type="password"
        value={data.confirmNewPassword}
        onChange={onChange("confirmNewPassword")}
        placeholder="Re-enter new password"
        error={isSubmitted && error.confirmNewPassword}
      />

      <Button>Save Account Settings</Button>
    </form>
  );
};

export default AccountSecurityPage;
