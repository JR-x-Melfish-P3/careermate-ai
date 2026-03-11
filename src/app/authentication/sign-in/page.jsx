"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Button from "../components/Button";
import Field from "../components/Field";
import Header from "../components/Header";
import Hint from "../components/Hint";
import useForm from "../hooks/useForm";
import ServerError from "./components/ServerError";
import getEmailError from "./utils/getEmailError";
import getPasswordError from "./utils/getPasswordError";
import axios from "axios";

const SignInPage = () => {
  const { onChange, data, onSubmit, isSubmitted, error } = useForm({
    fields: ["email", "password"],
    validation: {
      email: getEmailError,
      password: getPasswordError,
    },
  });

  const [serverError, setServerError] = useState();

  const router = useRouter();

  return (
    <>
      <form>
        <Header
          title="Hello world"
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
          onClick={onSubmit(async () => {
            try {
              await axios.post(
                `${process.env.NEXT_PUBLIC_AUTH_API}/auth/sign-in`,
                data,
              );
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
