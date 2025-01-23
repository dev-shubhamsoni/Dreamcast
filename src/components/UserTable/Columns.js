import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { EditUserComp } from "./EditUserComp";
import DeleUserComp from "./DeleUserComp";
export const columns = [
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
            return (_jsxs("div", { className: "flex items-center gap-4", children: [_jsx(EditUserComp, { id: userId }), _jsx(DeleUserComp, { id: userId })] }));
        },
    },
];
