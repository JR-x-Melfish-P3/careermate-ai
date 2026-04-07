"use client";

import Button from "@/app/components/Button";
import Field from "@/app/components/Field";
import useForm from "@/app/hooks/useForm";

const CareerLearningPage = () => {
  const { data, onChange, onSubmit, error, isSubmitted } = useForm({
    fields: ["goal"],
    validation: {},
    initialData: { goal: "Looking for internship" },
  });

  const handleSave = () => {
    // TODO: addToast('Saved successfully')
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
        error={isSubmitted && error.fullName}
      />

      <Button>Save Career Settings</Button>
    </form>
  );
};

export default CareerLearningPage;
