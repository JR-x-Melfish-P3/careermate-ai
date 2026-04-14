const Button = ({ children, onClick, fullWidth = false }) => (
  <button
    onClick={onClick}
    className={`h-12 rounded-3xl bg-[linear-gradient(98deg,#504ffd_12%,#40c3fb_91%)] text-white text-sm font-bold cursor-pointer px-6 ${fullWidth ? "w-full" : "w-auto"}`}
  >
    {children}
  </button>
);

export default Button;
