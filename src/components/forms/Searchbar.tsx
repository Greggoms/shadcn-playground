"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import * as Portal from "@radix-ui/react-portal";

import {
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { ScrollArea } from "@/components/ui/scroll-area";

import {
  SearchbarResults,
  searchbarOptions,
} from "@/lib/data/searchbar-results";
import flattenObject from "@/lib/utils/flatten-object";

/**
 * The CommandItems should have an update coming out soon that
 * allows them to use an `asChild` prop. This would allow a
 * focused `<Link>` (or `<Button>`) to work when the user hits `Enter`.
 * This is important because the only way to achieve this result right now
 * is to programmatically invoke the function using an `onKeyDown` handler.
 * This functionality currently does not work, and the user must click
 * on the option. It is still better than the current implmentation though.
 * - https://github.com/pacocoursey/cmdk/issues/98
 * - https://github.com/pacocoursey/cmdk/issues/215
 * - https://www.npmjs.com/package/cmdk?activeTab=versions
 *
 * It actually seems that the focused state and selected state are separate.
 * The user must use the arrow keys to truly 'select' the option. The `Tab` key
 * will visibly focus through the options, but not have them marked as 'selected'.
 *
 */
const Searchbar = () => {
  const router = useRouter();
  const [filtered, setFiltered] = useState<SearchbarResults>([]);
  const containerElement = useRef(null);

  const handleFilterSearch = (searchInput: string) => {
    if (!searchInput) return setFiltered([]);

    const filteredResults = searchbarOptions.filter((option) => {
      const flatObj = flattenObject(option);
      return Object.values(flatObj).some((val) =>
        String(val).toLowerCase().includes(searchInput.toLowerCase())
      );
    });
    setFiltered(filteredResults);
  };

  return (
    <Command shouldFilter={false} className="relative overflow-visible mb-5">
      <CommandInput
        inputMode="search"
        placeholder="Search employees by name, location, or ID"
        onValueChange={(val) => handleFilterSearch(val)}
      />
      {/* 
        Container Element - Allows CommandItems to hover over body: 
        • https://github.com/pacocoursey/cmdk?tab=readme-ov-file#dialog-cmdk-dialog-cmdk-overlay
      */}
      <div
        ref={containerElement}
        className="z-10 absolute top-10 w-full bg-accent/40 backdrop-blur-md"
      />

      {/*
        Portal Root - Allows CommandItems to hover over body: 
        • https://github.com/pacocoursey/cmdk/issues/95
        • https://github.com/pacocoursey/cmdk/commit/54aa2617a80ce897dedfaea65a24cc439cd3c03f?diff=unified&w=0#diff-b7385836e47bab6d81106069b4dd6a773badd42a5ceaca6c913a1fa3b1e02c1f

      */}
      <Portal.Root data-portal="true" container={containerElement.current}>
        {/* <ScrollArea> */}
        <CommandList>
          {filtered.length > 0 && (
            <CommandGroup
              heading={
                <span>
                  <kbd>↑↓</kbd> navigate with arrow keys. <kbd>Enter</kbd> to
                  select.
                </span>
              }
            >
              {filtered.map((item) => {
                return (
                  <CommandItem
                    key={item.id}
                    onSelect={() => {
                      console.log(`Selected ${item.name}`);
                      router.push(`/?selected=${item.name}`);
                    }}
                    className="data-[selected=true]:bg-green-600 p-0"
                  >
                    <Link href={"/"} className="bg-red-800/40 w-full p-2">
                      <p className="text-ld">{item.name}</p>
                      <p className="text-muted-foreground">{item.location}</p>
                    </Link>
                  </CommandItem>
                );
              })}
            </CommandGroup>
          )}
        </CommandList>
        {/* </ScrollArea> */}
      </Portal.Root>
    </Command>
  );
};

export default Searchbar;
