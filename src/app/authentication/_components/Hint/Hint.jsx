import Link from "next/link";

const Hint = ({ message, action }) => (
  <p className="text-center text-sm mt-6">
    <span className="text-gray-700">{message}</span>
    &nbsp;
    <Link href={action.href} className="text-blue-500">
      {action.text}
    </Link>
  </p>
);

export default Hint;
