"use client";

import { useEffect, useEffectEvent, useState } from "react";
import AuthenticationContext from "./AuthenticationContext";
import axios from "axios";

const AuthenticationProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleGetUser = async () => {
    setError(null);

    try {
      const response = await axios.get("/api/auth");

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
      value={{ user, loading, error, mutate: handleGetUser }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationProvider;
