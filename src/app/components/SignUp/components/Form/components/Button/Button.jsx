const Button = ({ children, onClick }) => (
  <button
    onClick={onClick}
    className="h-12 w-full rounded-3xl bg-[linear-gradient(98deg,#504ffd_12%,#40c3fb_91%)] text-white text-sm font-bold cursor-pointer"
  >
    {children}
  </button>
);

export default Button;
