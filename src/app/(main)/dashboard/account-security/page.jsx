"use client";

import Button from "@/app/_components/Button";
import Field from "@/app/_components/Field";
import { useAuthentication } from "@/app/_contexts/Authentication";
import useForm from "@/app/_hooks/useForm";

const AccountSecurityPage = () => {
  const { user } = useAuthentication();

  const { data, onChange, onSubmit, error, isSubmitted } = useForm({
    fields: ["email", "currentPassword", "newPassword", "confirmNewPassword"],
    validation: {},
    initialData: {
      email: user.email,
    },
  });

  const handleSave = () => {};

  return (
    <form onSubmit={onSubmit(handleSave)}>
      <h2 className="text-lg font-semibold text-gray-900 mb-6">
        Account &amp; Security
      </h2>

      <Field
        hint="Your login email cannot be changed here. Contact support if needed."
        label="Email"
        readOnly
        value={data.email}
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
