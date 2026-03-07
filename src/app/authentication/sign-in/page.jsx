"use client";

import Header from "../components/Header";
import Field from "../components/Field";
import Button from "../components/Button";
import Hint from "../components/Hint";
import getEmailError from "./utils/getEmailError";
import getPasswordError from "./utils/getPasswordError";
import useForm from "../hooks/useForm";

const SignInPage = () => {
  const { onChange, data, onSubmit, isSubmitted, error } = useForm({
    fields: ["email", "password"],
    validation: {
      email: getEmailError,
      password: getPasswordError,
    },
  });

  return (
    <>
      <form>
        <Header
          title="Welcome Back"
          subTitle="Log in to continue your AI journey"
        />
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
            onSubmit(() => {}, event);
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
