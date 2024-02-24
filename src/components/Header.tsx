import Link from "next/link";

import Nav from "@/components/Nav";
import ThemeToggle from "@/components/ThemeToggle";
import UserButton from "@/components/UserButton";

const Header = () => {
  return (
    <header className="border-b-[1px] border-b-border shadow-sm sticky top-0 bg-background/70 backdrop-blur-lg z-20">
      <div className="flex items-center justify-between p-3">
        <div className="flex items-baseline gap-x-5">
          <h2 className="font-thin text-xl">
            <Link href="/">shadcn-playground</Link>
          </h2>
          <Nav />
        </div>

        <div className="flex items-center gap-x-4">
          <ThemeToggle />
          <UserButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
