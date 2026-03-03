"use client";

import { useState } from "react";
import Button from "./components/Button";
import Field from "./components/Field";
import LoginLink from "./components/LoginLink";
import getEmailError from "./utils/getEmailError";
import getFullNameError from "./utils/getFullNameError";
import getPasswordError from "./utils/getPasswordError";

const Form = () => {
  const [fullName, setFullName] = useState("");
  const fullNameError = getFullNameError(fullName);

  const [email, setEmail] = useState("");
  const emailError = getEmailError(email);

  const [password, setPassword] = useState("");
  const passwordError = getPasswordError(password);

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
