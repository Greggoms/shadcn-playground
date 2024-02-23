import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function UserButton() {
  return (
    <Avatar>
      <AvatarImage src="/avatar-image.jpg" alt="Current User" />
      <AvatarFallback>CU</AvatarFallback>
    </Avatar>
  );
}
