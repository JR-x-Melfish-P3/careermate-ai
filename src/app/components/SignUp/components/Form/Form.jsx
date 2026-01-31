"use client";

import { useState } from "react";
import Button from "./components/Button";
import Field from "./components/Field";
import LoginLink from "./components/LoginLink";
import { isEmail, isEmpty, isStrongPassword } from "validator";

// setFullName

// 当用户 click 的时候，set fullname 为

// 当 ? 时候，set fullname 为 ?
// 这里对代码能力的需求为0，对人生经验的需求为 100%

// 当用户输入的时候，set fullname 为用户输入的值

// react 如何拿到用户的输入

// 当 ? 时候，set fullname error 为？
// 当 submit form 并且 fullname 为空的时候，set fullname error 为 "Please enter your full name"
// fullNameError 可以从 fullName 状态计算出来

// 当 ？时候，set email error 为 ？
// 当 submit form 并且 email 为空的时候，set email error 为 "Please enter your email"
// 当 submit form 并且 email 格式不对的时候，set email error 为 "Please enter a valid email address"
// emailError 可以从 email 状态计算出来

// 当 submit form 并且 password 为空的时候，set password error 为 "Please enter your password"
// 当 submit form 并且 password 少于 8 个字符的时候，set password error 为 "Password must be at least 8 characters long"
// passwordError 可以从 password 状态计算出来

// 当 submit form 的时候
// state 用来保存 form 被 submit 了

// 衍生状态，很多情况下，一个状态可以从另外一个或者多个状态计算出来

// 电视
// 电视 有 开关状态 -> 开关指示灯 -> 屏幕显示内容
// 输入源状态
// 开关 + 输入源 -> HDMI1 也就是机顶盒内容
// 屏幕显示内容 -> HDMI2 也就是PS5内容
// 屏幕显示内容 -> HDMI3 也就是...内容

// 从多个验证中找到检查通过的验证，并返回其错误信息
// const getError = (value, validators) =>
//   validators.find((validator) => validator.check(value))?.message || "";

// 从多个错误中找到符合的错误，并返回其错误信息
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

      <div className="space-y-4">
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
