const UserProfile = () => (
  <div className="flex items-center gap-6 py-6 border-b border-gray-100">
    <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-xl font-bold text-gray-600 shrink-0">
      R
    </div>
    <div className="flex-1">
      <div className="font-semibold text-gray-900">Ray Zhang</div>
      <div className="text-sm text-gray-500">ray@example.com</div>
      <div className="text-sm text-gray-400">Frontend · Looking for internship</div>
    </div>
    <button
      type="button"
      className="px-4 py-2 text-sm border border-gray-300 rounded-3xl text-gray-600 hover:bg-gray-50"
    >
      Upload Now
    </button>
  </div>
)

export default UserProfile
