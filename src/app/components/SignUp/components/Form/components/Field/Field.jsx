const Field = ({ label, placeholder }) => (
  <div>
    <div className="mb-2">
      <label className="text-gray-700 text-sm">{label}</label>
    </div>
    <div>
      <input
        className="px-4 h-12 rounded-3xl border border-gray-300 w-full"
        placeholder={placeholder}
      />
    </div>
  </div>
);

export default Field;
