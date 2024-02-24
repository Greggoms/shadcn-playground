"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Checkbox } from "@/components/ui/checkbox";

import UserTableRowActions from "@/components/tables/UserTableRowActions";
import DataTableColumnHeader from "@/components/ui/makeshift/DataTableColumnHeader";
import { User } from "@/types/User";

export const columns: ColumnDef<User>[] = [
  // {
  //   id: "select",
  //   header: ({ table }) => (
  //     <Checkbox
  //       checked={
  //         table.getIsAllPageRowsSelected() ||
  //         (table.getIsSomePageRowsSelected() && "indeterminate")
  //       }
  //       onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
  //       aria-label="Select all"
  //     />
  //   ),
  //   cell: ({ row }) => (
  //     <Checkbox
  //       checked={row.getIsSelected()}
  //       onCheckedChange={(value) => row.toggleSelected(!!value)}
  //       aria-label="Select row"
  //     />
  //   ),
  //   enableSorting: false,
  //   enableHiding: false,
  // },
  {
    id: "actions",
    cell: ({ row }) => {
      const person = row.original;
      return <UserTableRowActions person={person} />;
    },
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
  },
  {
    accessorKey: "email",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Email" />
    ),
    cell: ({ row }) => {
      // do some formatting or calculations...
      // ...
      const value = row.getValue("email");
      return <div className="link no-underline">{value as string}</div>;
    },
  },
  {
    accessorKey: "company.name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Company" />
    ),
  },
];
