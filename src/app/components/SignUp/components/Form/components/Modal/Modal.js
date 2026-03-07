import { createPortal } from "react-dom";
import { twMerge } from "tailwind-merge";

const Modal = ({ isDialog, children }) => {
  const root = document.getElementById("dialog-root");

  if (!root) {
    return null;
  }

  return createPortal(
    <div
      className={twMerge(
        "fixed top-0 left-0 h-dvh w-full flex justify-center items-center",
        isDialog ? "bg-black/50" : "bg-white",
      )}
    >
      <div className={twMerge(isDialog && "bg-white rounded-md")}>
        {children}
      </div>
    </div>,
    root,
  );
};

export default Modal;
