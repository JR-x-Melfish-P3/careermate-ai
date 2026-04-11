"use client";

import auth from "@/app/apis/auth";
import { useEffect, useEffectEvent, useState } from "react";
import AuthenticationContext from "./AuthenticationContext";

const AuthenticationProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleGetUser = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await auth.get("/auth");

      setLoading(false);
      setUser(response.data);
    } catch (error) {
      setError(error);
    }
  };

  const handleGetUserEventEffect = useEffectEvent(handleGetUser);

  useEffect(() => {
    void handleGetUserEventEffect();
  }, []);

  return (
    <AuthenticationContext.Provider
      value={{ user, loading, error, signIn: handleGetUser }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationProvider;

// - RootLayout
//  - AuthenticationProvider (useEffect -> error 401) 这个 useEffect 只调用了一次
//    - Authentication/SignInPage (login -> dashboard)
//    - (main)/DashboardLayout (1st. error 401 -> redirect sign-in)
//    - (main)/DashboardLayout (2nd. error 401 -> redirect sign-in)
//    - (main)/DashboardLayout (2nd. user)
