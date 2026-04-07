"use client";

import NavList from "./components/NavList";
import UserProfile from "./components/UserProfile";

const DashboardLayout = ({ children }) => (
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

export default DashboardLayout;
