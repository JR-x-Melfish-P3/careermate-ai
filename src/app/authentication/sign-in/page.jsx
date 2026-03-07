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
          title="Welcome Back"
          subTitle="Log in to continue your AI journey"
        />
        {serverError && <ServerError status={serverError.response?.status} />}
        <Field
          value={data.email}
          onChange={(event) => onChange("email", event)}
          label="Email"
          placeholder="Your email"
          error={isSubmitted && error.email}
        />
        <Field
          value={data.password}
          onChange={(event) => onChange("password", event)}
          label="Password"
          type="password"
          placeholder="Your password"
          error={isSubmitted && error.password}
        />
        <Button
          onClick={(event) => {
            onSubmit(async () => {
              try {
                await axios.post("http://localhost:8000/auth/sign-in", data);
              } catch (error) {
                setServerError(error);
                return;
              }

              router.push("/dashboard");
            }, event);
          }}
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
