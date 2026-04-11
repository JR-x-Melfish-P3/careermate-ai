"use client";

import { useEffect, useEffectEvent } from "react";
import NavList from "./components/NavList";
import UserProfile from "./components/UserProfile";
import { useRouter } from "next/navigation";
import { useAuthentication } from "@/app/contexts/Authentication";

const DashboardLayout = ({ children }) => {
  const { loading, error } = useAuthentication();

  const router = useRouter();
  const handleSignInRedirectionEffectEvent = useEffectEvent(() => {
    router.push("/authentication/sign-in");
  });

  useEffect(() => {
    if (![401, 403].includes(error?.response?.status)) {
      return;
    }

    handleSignInRedirectionEffectEvent();
  }, [error]);

  if (loading) {
    return <div className="text-center pt-[10%]">Loading...</div>;
  }

  return (
    <div className="max-w-5xl mx-auto px-10 py-8">
      <h1 className="text-2xl text-gray-900">Personal Settings</h1>
      <p className="text-sm text-gray-500 mt-3 mb-6">
        Update your basic info, career focus and account security
      </p>
      <UserProfile />
      <div className="flex gap-10 mt-8">
        <aside className="w-52 shrink-0">
          <NavList />
        </aside>
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
