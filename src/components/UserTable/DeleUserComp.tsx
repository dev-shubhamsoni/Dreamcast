import { Check, CircleHelp, Trash2, X } from "lucide-react";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useDispatch } from "react-redux";
import { deleteUserData } from "@/redux/slice/mainSlice";

interface Number {
  id: number;
}


const DeleUserComp = ({ id }: Number) => {
  const dispatch = useDispatch();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Trash2 size={18} className=" cursor-pointer" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-[#18181b]">
        <DropdownMenuLabel className=" text-white flex justify-between items-center">
          Are you sure? <CircleHelp size={18} />
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem
            onClick={() => dispatch(deleteUserData(id))}
            className=" cursor-pointer text-white"
          >
            Yes
            <DropdownMenuShortcut>
              <Check size={18} />
            </DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem className=" cursor-pointer text-white">
            No
            <DropdownMenuShortcut>
              <X size={18} />
            </DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DeleUserComp;
