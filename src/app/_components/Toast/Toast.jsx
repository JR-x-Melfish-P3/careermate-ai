import { Check, X } from "lucide-react";

const Toast = ({ id, message, onRemove }) => (
  <div className="flex items-center gap-3 w-80 bg-gray-800 text-white px-4 py-3 rounded-lg shadow-lg">
    <div className="flex items-center justify-center w-6 h-6 bg-blue-500 rounded-full shrink-0">
      <Check size={14} strokeWidth={3} />
    </div>
    <span className="flex-1 text-sm">{message}</span>
    <button
      type="button"
      onClick={() => onRemove(id)}
      className="text-gray-400 hover:text-white transition-colors"
    >
      <X size={16} />
    </button>
  </div>
);

export default Toast;
