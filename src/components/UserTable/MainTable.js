import { jsx as _jsx } from "react/jsx-runtime";
import { useSelector } from "react-redux";
import { columns } from "./Columns";
import { UserTable } from "./UserTable";
export default function MainTable() {
    const data = useSelector((state) => state.mainSlice.userData);
    console.log("data", data);
    return (_jsx("section", { className: " w-[90%] ", children: _jsx(UserTable, { columns: columns, data: data || [] }) }));
}
