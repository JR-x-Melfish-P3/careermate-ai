"use client";

import { createPortal } from "react-dom";
import Toast from "@/app/_components/Toast";

const Container = ({ toasts, onRemove }) => {
  const root = document.getElementById("dialog-root");

  if (!root) return null;

  return createPortal(
    <div className="fixed top-4 right-4 flex flex-col gap-2 z-50">
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          id={toast.id}
          message={toast.message}
          onRemove={onRemove}
        />
      ))}
    </div>,
    root,
  );
};

export default Container;
