import { ArrowUpRight } from "lucide-react";

const Card = ({ title, children }) => (
  <div className="rounded-3xl border border-white bg-white/50 p-6">
    <div className="flex gap-4 mb-12">
      <div className="text-lg font-bold">{title}</div>
      <div>
        <div className="size-8 rounded-full bg-white flex items-center justify-center ml-2">
          <ArrowUpRight />
        </div>
      </div>
    </div>
    {children}
  </div>
);

export default Card;
