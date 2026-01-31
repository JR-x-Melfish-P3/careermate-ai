const Field = ({ label, value, placeholder, onChange, type, error }) => (
  <div>
    <div className="mb-2">
      <label className="text-gray-700 text-sm">{label}</label>
    </div>
    <div>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className={`px-4 h-12 rounded-3xl border border-gray-300 w-full ${
          error && "border-red-500"
        }`}
        placeholder={placeholder}
      />
    </div>
    <div className="text-sm text-red-500 h-[1em] mt-1">{error}</div>
  </div>
);

export default Field;
