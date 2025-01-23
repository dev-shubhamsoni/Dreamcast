import { ColumnDef } from "@tanstack/react-table";

import {  EditUserComp } from "./EditUserComp";
import DeleUserComp from "./DeleUserComp";
import { User } from "@/lib/types";


export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "phone",
    header: "Phone Number",
  },
  {
    accessorKey: "address.city",
    header: "City",
  },
  {
    accessorKey: "address.zipcode",
    header: "Zip Code",
  },
  {
    accessorKey: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const userId = row.original.id; // Get the `id` from the row's data

      return (
        <div className="flex items-center gap-4">
          <EditUserComp id={userId} />
          <DeleUserComp id={userId} />
        </div>
      );
    },
  },
];
