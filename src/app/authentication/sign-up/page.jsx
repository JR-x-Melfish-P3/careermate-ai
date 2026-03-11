"use client";

import axios from "axios";
import { useState } from "react";
import Button from "../components/Button";
import Field from "../components/Field";
import ServerError from "./components/ServerError";
import getEmailError from "./utils/getEmailError";
import getFullNameError from "./utils/getFullNameError";
import getPasswordError from "./utils/getPasswordError";
import { useRouter } from "next/navigation";
import Header from "../components/Header";
import Hint from "../components/Hint";
import useForm from "../hooks/useForm";

const SignUpPage = () => {
  const { onChange, data, onSubmit, isSubmitted, error } = useForm({
    fields: ["fullName", "email", "password"],
    validation: {
      fullName: getFullNameError,
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
          title={<div className="font-black">Create Your Account</div>}
          subTitle="Join CareerMate AI and start your smart career journey"
        />

        <Field
          value={data.fullName}
          onChange={(event) => onChange("fullName", event)}
          label="Full Name"
          placeholder="Your full name"
          error={isSubmitted && error.fullName}
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
          placeholder="Create a password"
          error={isSubmitted && error.password}
        />

        <Button
          onClick={(event) => {
            onSubmit(async () => {
              try {
                await axios.post(
                  `${process.env.NEXT_PUBLIC_AUTH_API}/auth/sign-up`,
                  data,
                );
              } catch (error) {
                setServerError(error);
                return;
              }

              router.push("/dashboard");
            }, event);
          }}
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
