import { toast } from "sonner";
import {
  MoreHorizontal,
  MoreVertical,
  ClipboardCopy,
  UserIcon,
  CheckCircleIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { User } from "@/types/User";

export default function UserTableRowActions({ person }: { person: User }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuItem
          onClick={() => {
            navigator.clipboard.writeText(person.name);
            toast(
              <div className="flex">
                <CheckCircleIcon className="w-5 h-5 mr-2 text-emerald-500" />
                Copied to clipboard
              </div>
            );
          }}
        >
          <ClipboardCopy className="w-5 h-5 mr-2" /> Copy Employee Name
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <UserIcon className="w-5 h-5 mr-2" /> View profile
        </DropdownMenuItem>
        <DropdownMenuItem>
          <MoreVertical className="w-5 h-5 mr-2" /> Some other action
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
