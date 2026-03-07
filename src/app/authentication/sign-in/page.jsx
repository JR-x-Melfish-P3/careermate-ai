import Header from "../components/Header";
import Field from "../components/Field";
import Button from "../components/Button";
import Hint from "../components/Hint";

const SignInPage = () => {
  return (
    <>
      <form>
        <Header
          title="Welcome Back"
          subTitle="Log in to continue your AI journey"
        />
        <Field
          // value={email}
          // onChange={(event) => setEmail(event.target.value)}
          label="Email"
          placeholder="Your email"
          // error={isSubmitted && emailError}
        />
        <Field
          // value={password}
          // onChange={(event) => setPassword(event.target.value)}
          label="Password"
          type="password"
          placeholder="Your password"
          // error={isSubmitted && passwordError}
        />
        <Button>Login</Button>
        <Hint
          message="Don't have an account?"
          action={{ text: "Sign up", href: "/authentication/sign-up" }}
        />
      </form>
    </>
  );
};

export default SignInPage;
