import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useDispatch } from "react-redux";
import "./App.css";
import { useGetUsersListQuery } from "./redux/api/mainApi";
import { useEffect } from "react";
import { setUserData } from "./redux/slice/mainSlice";
import { Check, X } from "lucide-react";
import { Button } from "./components/ui/button";
import { useNavigate } from "react-router";
function App() {
    const { data, isSuccess } = useGetUsersListQuery({});
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        if (data && isSuccess) {
            dispatch(setUserData(data));
        }
    }, [isSuccess, data, dispatch]);
    const features = [
        "Used React Vite with Typescript.",
        "CSS - Tailwind CSS",
        "State Management - Redux",
        "API - RTK Query",
        "Forms - React Forms",
        "Component Library - Shadcn",
    ];
    return (_jsx("main", { className: "bg-white min-h-[100vh] w-full p-[50px] flex flex-col gap-4 justify-center items-center", children: _jsxs("div", { className: "flex flex-col gap-[50px] items-center justify-start w-[60%] bg-black h-[400px] rounded-lg p-5 pl-[50px]", children: [_jsx("h1", { className: "text-white text-[20px] font-bold", children: "Thank you for this opportunity." }), _jsxs("div", { className: "w-full flex-col gap-3", children: [features.map((feature, index) => (_jsxs("div", { className: "flex w-full items-center", children: [_jsx("div", { className: "w-[5%] flex items-center", children: _jsx(Check, { color: "white" }) }), _jsx("div", { className: "w-[95%] flex items-center", children: _jsx("p", { className: "text-white", children: feature }) })] }, index))), _jsxs("div", { className: "flex w-full items-center", children: [_jsx("div", { className: "w-[5%] flex items-center", children: _jsx(X, { color: "white" }) }), _jsx("div", { className: "w-[95%] flex items-center", children: _jsx("p", { className: "text-white", children: " Not a responsive design (Time Constraints)" }) })] })] }), _jsx(Button, { onClick: () => navigate("/user"), className: " bg-white text-black hover:bg-white", children: "View Users" })] }) }));
}
export default App;
