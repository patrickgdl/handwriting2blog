import Link from "next/link";
import clsx from "clsx";
import { useRouter } from "next/router";
import {
  DocumentTextIcon,
  DocumentIcon,
  PhotoIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";

export const navigationItems = [
  {
    title: "Posts",
    href: "/dashboard",
    icon: DocumentTextIcon,
  },
  {
    title: "Páginas",
    href: "/",
    icon: DocumentIcon,
    disabled: true,
  },
  {
    title: "Mídia",
    href: "/",
    icon: PhotoIcon,
    disabled: true,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Cog6ToothIcon,
  },
];

export function DashboardNav() {
  const router = useRouter();

  return (
    <nav className="grid items-start gap-2">
      {navigationItems.map((navigationItem, index) => (
        <Link
          key={index}
          href={navigationItem.disabled ? "/" : navigationItem.href}
        >
          <span
            className={clsx(
              "group flex items-center rounded-md px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-100",
              router.path === navigationItem.href
                ? "bg-slate-200"
                : "transparent",
              navigationItem.disabled && "cursor-not-allowed opacity-50"
            )}
          >
            <navigationItem.icon className="mr-2 h-4 w-4" />
            <span>{navigationItem.title}</span>
          </span>
        </Link>
      ))}
    </nav>
  );
}
