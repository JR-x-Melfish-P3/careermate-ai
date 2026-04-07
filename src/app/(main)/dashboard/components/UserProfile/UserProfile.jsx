const UserProfile = () => (
  <div className="flex items-center gap-6 py-5 px-8 border border-gray-100 rounded-3xl">
    <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-xl font-bold text-gray-600 shrink-0">
      R
    </div>
    <div className="flex-1">
      <div className="flex gap-4 items-center">
        <div className="text-gray-900">Ray Zhang</div>
        <div className="text-sm text-gray-500 bg-gray-200 px-2 py-1 rounded-md">
          ray@example.com
        </div>
      </div>
      <div className="text-sm text-gray-600 mt-3">
        Frontend · Looking for internship
      </div>
    </div>
    <button
      type="button"
      className="px-4 py-2 text-sm rounded-3xl bg-gray-200 hover:bg-gray-100"
    >
      Upload Now
    </button>
  </div>
);

export default UserProfile;
