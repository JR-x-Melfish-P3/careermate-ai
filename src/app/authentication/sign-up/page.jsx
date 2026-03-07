"use client";

import axios from "axios";
import { useState } from "react";
import Button from "../components/Button";
import Field from "../components/Field";
import RegisteredSuccess from "./components/RegisteredSuccess";
import ServerError from "./components/ServerError";
import getEmailError from "./utils/getEmailError";
import getFullNameError from "./utils/getFullNameError";
import getPasswordError from "./utils/getPasswordError";
import { useRouter } from "next/navigation";
import Header from "../components/Header";
import Hint from "../components/Hint";

const SignUpPage = () => {
  const [fullName, setFullName] = useState("");
  const fullNameError = getFullNameError(fullName);

  const [email, setEmail] = useState("");
  const emailError = getEmailError(email);

  const [password, setPassword] = useState("");
  const passwordError = getPasswordError(password);

  const [isSubmitted, setIsSubmitted] = useState(false);

  const [serverError, setServerError] = useState();

  const [isRegistered, setIsRegistered] = useState(false);

  const router = useRouter();

  return (
    <>
      <form>
        <Header
          title={<div className="font-black">Create Your Account</div>}
          subTitle="Join CareerMate AI and start your smart career journey"
        />

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

        <Button
          onClick={async (event) => {
            event.preventDefault();

            setIsSubmitted(true);

            const invalid = [fullNameError, emailError, passwordError].some(
              (value) => !!value,
            );

            if (invalid) {
              return;
            }

            try {
              await axios.post("http://localhost:8000/auth/sign-up", {
                email,
                password,
              });
            } catch (error) {
              setServerError(error);
              return;
            }

            setIsRegistered(true);

            router.push("/dashboard");
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
      {isRegistered && <RegisteredSuccess />}
    </>
  );
};

export default SignUpPage;
