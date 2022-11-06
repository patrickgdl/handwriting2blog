import Link from "next/link";

import { DropdownMenu } from "ui";
import { UserAvatar } from "./UserAvatar";

export function UserAccountNav(user) {
  return (
    <DropdownMenu>
      <DropdownMenu.Trigger className="focus:ring-brand-900 flex items-center gap-2 overflow-hidden focus:ring-2 focus:ring-offset-2 focus-visible:outline-none">
        <UserAvatar user={{ name: user.name, image: user.image }} />
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className="mt-2 md:w-[240px]" align="end">
          <div className="flex items-center justify-start gap-2 p-4">
            <div className="flex flex-col space-y-1 leading-none">
              {user.name && <p className="font-medium">{user.name}</p>}
              {user.email && (
                <p className="w-[200px] truncate text-sm text-slate-600">
                  {user.email}
                </p>
              )}
            </div>
          </div>
          <DropdownMenu.Separator />
          <DropdownMenu.Item>
            <Link href="/dashboard" className="w-full">
              Dashboard
            </Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <Link href="/dashboard/settings" className="w-full">
              Configurações
            </Link>
          </DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.Item>
            <Link
              href="https://github.com/patrickgdl/handwriting2html"
              className="w-full"
              target="_blank"
            >
              GitHub
            </Link>
          </DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.Item
            className="cursor-pointer"
            onSelect={(event) => {
              event.preventDefault();
              signOut({
                callbackUrl: `${window.location.origin}/login`,
              });
            }}
          >
            Logout
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu>
  );
}
