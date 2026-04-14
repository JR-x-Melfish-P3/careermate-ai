"use client";

import Button from "@/app/_components/Button";
import Field from "@/app/_components/Field";
import useForm from "@/app/_hooks/useForm";
import { useToast } from "@/app/_contexts/Toast";
import z from "zod";
import { useAuthentication } from "@/app/_contexts/Authentication";
import axios from "axios";

const schema = z.object({
  goal: z.string().optional(),
});

const CareerLearningPage = () => {
  const { user } = useAuthentication();
  const { addToast } = useToast();

  const { data, onChange, onSubmit, error, isSubmitted } = useForm({
    fields: ["goal"],
    schema,
    initialData: { goal: user.goal },
  });

  const handleSave = async () => {
    await axios.put("/api/auth/user/career-learning", data);
    addToast("Career settings saved successfully");
  };

  return (
    <form onSubmit={onSubmit(handleSave)}>
      <h2 className="text-lg font-semibold text-gray-900 mb-6">
        Career &amp; Learning
      </h2>

      <Field
        label="Your Goal"
        value={data.goal}
        onChange={onChange("goal")}
        placeholder="What are you looking for?"
        error={isSubmitted && error.goal}
      />

      <Button>Save Career Settings</Button>
    </form>
  );
};

export default CareerLearningPage;
