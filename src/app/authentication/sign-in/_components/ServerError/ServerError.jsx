const ServerError = ({ status }) => (
  <div className="relative">
    <div className="absolute left-0 right-0 bg-rose-100 py-2 px-3 text-rose-600 font-sm rounded transform -translate-y-6/5">
      {{
        404: "Invalid email or password. Please try again.",
      }[status] || "Something went wrong, please try again later."}
    </div>
  </div>
);

export default ServerError;
