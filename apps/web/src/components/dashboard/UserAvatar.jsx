import { UserIcon } from "@heroicons/react/24/outline";
import { Avatar } from "ui";

export function UserAvatar({ user, ...props }) {
  return (
    <Avatar {...props}>
      <Avatar.Image alt="Avatar" src="/avatar.jpg" />
      <Avatar.Fallback>
        <span className="sr-only">{user.name}</span>
        <UserIcon className="h-4 w-4" />
      </Avatar.Fallback>
    </Avatar>
  );
}
