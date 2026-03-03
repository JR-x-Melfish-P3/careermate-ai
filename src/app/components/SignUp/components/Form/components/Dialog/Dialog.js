import { createPortal } from "react-dom";

const Dialog = ({ children }) => {
  const root = document.getElementById("dialog-root");

  if (!root) {
    return null;
  }

  return createPortal(
    <div className="fixed top-0 left-0 h-dvh w-full flex justify-center items-center bg-black/50">
      <div className="bg-white rounded-md">{children}</div>
    </div>,
    root,
  );
};

export default Dialog;
