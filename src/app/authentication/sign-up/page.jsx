"use client";

import { useState } from "react";
import Button from "../../_components/Button";
import Field from "../../_components/Field";
import ServerError from "./_components/ServerError";
import { useRouter } from "next/navigation";
import Header from "../_components/Header";
import Hint from "../_components/Hint";
import useForm from "../../_hooks/useForm";
import { useAuthentication } from "@/app/_contexts/Authentication";
import axios from "axios";
import z from "zod";

const schema = z.object({
  fullName: z.string().nonempty("Full Name is required"),
  email: z
    .string()
    .nonempty("Email is required")
    .email("Invalid email address"),
  password: z.string().nonempty("Password is required"),
});

const SignUpPage = () => {
  const { mutate } = useAuthentication();

  const { onChange, data, onSubmit, isSubmitted, error } = useForm({
    fields: ["fullName", "email", "password"],
    schema,
  });

  const [serverError, setServerError] = useState();

  const router = useRouter();

  return (
    <>
      <form>
        <Header
          title={<div className="font-black">Create Your Account</div>}
          subTitle="Join CareerMate AI and start your smart career journey"
        />

        <Field
          value={data.fullName}
          onChange={onChange("fullName")}
          label="Full Name"
          placeholder="Your full name"
          error={isSubmitted && error.fullName}
        />
        <Field
          value={data.email}
          onChange={onChange("email")}
          label="Email"
          placeholder="Your email"
          error={isSubmitted && error.email}
        />
        <Field
          value={data.password}
          onChange={onChange("password")}
          label="Password"
          type="password"
          placeholder="Create a password"
          error={isSubmitted && error.password}
        />

        <Button
          fullWidth
          onClick={onSubmit(async () => {
            try {
              await axios.post("/api/auth/sign-up", data);
              await mutate();
            } catch (error) {
              setServerError(error);

              return;
            }

            router.push("/dashboard");
          })}
        >
          Create Account
        </Button>
        <Hint
          message="Already have an account?"
          action={{ text: "Log in", href: "/authentication/sign-in" }}
        />
      </form>

      {serverError && <ServerError status={serverError.response?.status} />}
    </>
  );
};

export default SignUpPage;
