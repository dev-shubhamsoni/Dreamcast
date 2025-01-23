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

  return (
    <main className="bg-white min-h-[100vh] w-full p-[50px] flex flex-col gap-4 justify-center items-center">
      <div className="flex flex-col gap-[50px] items-center justify-start w-[60%] bg-black h-[400px] rounded-lg p-5 pl-[50px]">
        <h1 className="text-white text-[20px] font-bold">
          Thank you for this opportunity.
        </h1>
        <div className="w-full flex-col gap-3">
          {features.map((feature, index) => (
            <div key={index} className="flex w-full items-center">
              <div className="w-[5%] flex items-center">
                <Check color="white" />
              </div>
              <div className="w-[95%] flex items-center">
                <p className="text-white">{feature}</p>
              </div>
            </div>
          ))}
          <div className="flex w-full items-center">
            <div className="w-[5%] flex items-center">
            <X color="white" />
            </div>
            <div className="w-[95%] flex items-center">
              <p className="text-white"> Not a responsive design (Time Constraints)</p>
            </div>
          </div>
          
        </div>
        <Button
          onClick={() => navigate("/user")}
          className=" bg-white text-black hover:bg-white"
        >
          View Users
        </Button>
      </div>
    </main>
  );
}

export default App;
