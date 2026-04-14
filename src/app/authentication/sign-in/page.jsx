"use client";

import { useAuthentication } from "@/app/_contexts/Authentication";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Button from "../../_components/Button";
import Field from "../../_components/Field";
import useForm from "../../_hooks/useForm";
import Header from "../_components/Header";
import Hint from "../_components/Hint";
import ServerError from "./_components/ServerError";
import z from "zod";
import axios from "axios";

const schema = z.object({
  email: z.string().nonempty("Email is required"),
  password: z.string().nonempty("Password is required"),
});

const SignInPage = () => {
  const { mutate } = useAuthentication();

  const { onChange, data, onSubmit, isSubmitted, error } = useForm({
    fields: ["email", "password"],
    schema,
  });

  const [serverError, setServerError] = useState();

  const router = useRouter();

  return (
    <>
      <form>
        <Header
          title="Welcome Back"
          subTitle="Log in to continue your AI journey"
        />
        {serverError && <ServerError status={serverError.response?.status} />}
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
          placeholder="Your password"
          error={isSubmitted && error.password}
        />
        <Button
          fullWidth
          onClick={onSubmit(async () => {
            try {
              await axios.post("/api/auth/sign-in", data);
              await mutate();
            } catch (error) {
              setServerError(error);
              return;
            }

            router.push("/dashboard");
          })}
        >
          Login
        </Button>
        <Hint
          message="Don't have an account?"
          action={{ text: "Sign up", href: "/authentication/sign-up" }}
        />
      </form>
    </>
  );
};

export default SignInPage;
