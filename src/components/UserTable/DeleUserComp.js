import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Check, CircleHelp, Trash2, X } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger, } from "../ui/dropdown-menu";
import { useDispatch } from "react-redux";
import { deleteUserData } from "@/redux/slice/mainSlice";
const DeleUserComp = ({ id }) => {
    const dispatch = useDispatch();
    return (_jsxs(DropdownMenu, { children: [_jsx(DropdownMenuTrigger, { asChild: true, children: _jsx(Trash2, { size: 18, className: " cursor-pointer" }) }), _jsxs(DropdownMenuContent, { className: "w-56 bg-[#18181b]", children: [_jsxs(DropdownMenuLabel, { className: " text-white flex justify-between items-center", children: ["Are you sure? ", _jsx(CircleHelp, { size: 18 })] }), _jsx(DropdownMenuSeparator, {}), _jsxs(DropdownMenuGroup, { children: [_jsxs(DropdownMenuItem, { onClick: () => dispatch(deleteUserData(id)), className: " cursor-pointer text-white", children: ["Yes", _jsx(DropdownMenuShortcut, { children: _jsx(Check, { size: 18 }) })] }), _jsxs(DropdownMenuItem, { className: " cursor-pointer text-white", children: ["No", _jsx(DropdownMenuShortcut, { children: _jsx(X, { size: 18 }) })] })] })] })] }));
};
export default DeleUserComp;
