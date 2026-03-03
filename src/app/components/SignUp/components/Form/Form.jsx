"use client";

import { useState } from "react";
import Button from "./components/Button";
import Field from "./components/Field";
import LoginLink from "./components/LoginLink";
import getEmailError from "./utils/getEmailError";
import getFullNameError from "./utils/getFullNameError";
import getPasswordError from "./utils/getPasswordError";
import axios from "axios";
import Dialog from "./components/Dialog";
import { CircleAlert } from "lucide-react";

const Form = () => {
  const [fullName, setFullName] = useState("");
  const fullNameError = getFullNameError(fullName);

  const [email, setEmail] = useState("");
  const emailError = getEmailError(email);

  const [password, setPassword] = useState("");
  const passwordError = getPasswordError(password);

  const [isSubmitted, setIsSubmitted] = useState(false);

  const [serverError, setServerError] = useState();

  const [isRegistered, setIsRegistered] = useState(false);

  return (
    <>
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
            }}
          >
            Create Account
          </Button>
          <LoginLink />
        </div>
      </form>

      {serverError && (
        <Dialog>
          <div className="p-10 space-y-4 width-[300px]">
            <div>
              <CircleAlert className="text-orange-500 mx-auto" size={40} />
            </div>
            {{
              409: (
                <div className="space-y-10">
                  <div className="font-bold">
                    Email already registered, please log in instead
                  </div>
                  <div>
                    <Button onClick={() => {}}>Go to Login</Button>
                  </div>
                </div>
              ),
            }[serverError.response?.status] || (
              <div className="font-bold">
                Something went wrong, please try again later
              </div>
            )}
          </div>
        </Dialog>
      )}
    </>
  );
};

export default Form;
