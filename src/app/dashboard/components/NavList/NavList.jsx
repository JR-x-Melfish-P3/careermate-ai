"use client";

import { BookOpen, ShieldCheck, User } from "lucide-react";
import { usePathname } from "next/navigation";
import NavItem from "./components/NavItem";

const NAV_ITEMS = [
  { icon: User, label: "Basic Info", href: "/dashboard/basic-info" },
  {
    icon: BookOpen,
    label: "Career & Learning",
    href: "/dashboard/career-learning",
  },
  {
    icon: ShieldCheck,
    label: "Account & Security",
    href: "/dashboard/account-security",
  },
];

const NavList = () => {
  const pathname = usePathname();

  return (
    <nav className="space-y-1">
      {NAV_ITEMS.map(({ icon: Icon, label, href }) => {
        const isActive = pathname === href;
        return (
          <NavItem
            key={href}
            icon={
              <Icon
                size={18}
                className={isActive ? "text-blue-500" : "text-gray-400"}
              />
            }
            label={label}
            href={href}
            isActive={isActive}
          />
        );
      })}
    </nav>
  );
};

export default NavList;
