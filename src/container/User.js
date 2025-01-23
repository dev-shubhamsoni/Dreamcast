import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AddUserComp } from "@/components/UserTable/AddUserComp";
import MainTable from "@/components/UserTable/MainTable";
import { useGetUsersListQuery } from "@/redux/api/mainApi";
import { setUserData } from "@/redux/slice/mainSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
const User = () => {
    const { data, isSuccess } = useGetUsersListQuery({});
    const dispatch = useDispatch();
    useEffect(() => {
        if (data && isSuccess) {
            dispatch(setUserData(data));
        }
    }, [isSuccess, data, dispatch]);
    return (_jsxs("section", { className: " bg-white min-h-[100vh] w-full p-[50px] flex flex-col gap-4 justify-center items-center", children: [_jsxs("div", { className: "flex gap-4 items-center justify-between w-[90%]", children: [_jsx("h1", { className: " text-[20px] font-bold", children: "User Table" }), _jsx(AddUserComp, {})] }), _jsx(MainTable, {})] }));
};
export default User;
