"use client";

import { useAuthentication } from "@/app/contexts/Authentication";

const UserProfile = () => {
  const { user } = useAuthentication();

  if (!user) {
    return;
  }

  return (
    <div className="flex items-center gap-6 py-5 px-8 border border-gray-100 rounded-3xl">
      <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-xl font-bold text-gray-600 shrink-0">
        {user.fullName[0].toUpperCase()}
      </div>
      <div className="flex-1">
        <div className="flex gap-4 items-center">
          <div className="text-gray-900">{user.fullName}</div>
          <div className="text-sm text-gray-500 bg-gray-200 px-2 py-1 rounded-md">
            {user.email}
          </div>
        </div>
        {(user.careerFocus || user.field) && (
          <div className="text-sm text-gray-600 mt-3">
            {[user?.careerFocus, user?.field].filter(Boolean).join(" · ")}
          </div>
        )}
      </div>
      <button
        type="button"
        className="px-4 py-2 text-sm rounded-3xl bg-gray-200 hover:bg-gray-100"
      >
        Upload Now
      </button>
    </div>
  );
};

export default UserProfile;
