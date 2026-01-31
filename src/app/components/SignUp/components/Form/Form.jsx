"use client";

import { useState } from "react";
import Button from "./components/Button";
import Field from "./components/Field";
import LoginLink from "./components/LoginLink";
import { isEmail, isEmpty, isStrongPassword } from "validator";

const getError = (value, errors) =>
  errors.find((error) => error.match(value))?.message || "";

const Form = () => {
  const [fullName, setFullName] = useState("");
  const fullNameError = getError(fullName, [
    {
      match: (value) => isEmpty(value),
      message: "Please enter your full name",
    },
  ]);

  const [email, setEmail] = useState("");
  const emailError = getError(email, [
    {
      match: (value) => isEmpty(value),
      message: "Please enter your email",
    },
    {
      match: (value) => !isEmail(value),
      message: "Please enter a valid email address",
    },
  ]);

  const [password, setPassword] = useState("");
  const passwordError = getError(password, [
    {
      match: (value) => isEmpty(value),
      message: "Please enter your password",
    },
    {
      match: (value) => !isStrongPassword(value),
      message: "Password must be at least 8 characters long",
    },
  ]);

  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <form className="px-[125px] my-auto">
      <div className="mb-16">
        <h1 className="font-black text-[40px]">Create Your Account</h1>
        <p className="text-sm text-gray-700 mt-3">
          Join CareerMate AI and start your smart career journey
        </p>
      </div>

      <div className="space-y-8">
        <Field
          value={fullName}
          onChange={(event) => setFullName(event.target.value)}
          label="Full Name"
          placeholder="Your full name"
          error={isSubmitted && fullNameError}
        />
        <Field
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          label="Email"
          placeholder="Your email"
          error={isSubmitted && emailError}
        />
        <Field
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          label="Password"
          type="password"
          placeholder="Create a password"
          error={isSubmitted && passwordError}
        />
      </div>

      <div className="mt-10 space-y-6">
        <Button
          onClick={(event) => {
            event.preventDefault();

            setIsSubmitted(true);

            console.log({ fullName, email, password });

            // 调用 API，如果 API 返回成功
            if (fullName === "Alice Wong") {
              console.log("Welcome back, Alice Wong!");
            }
          }}
        >
          Create Account
        </Button>
        <LoginLink />
      </div>
    </form>
  );
};

export default Form;
