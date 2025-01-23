
import { useSelector } from "react-redux";
import { columns } from "./Columns";
import { UserTable } from "./UserTable";

import { RootState } from "@/lib/store";

export default function MainTable() {
    const data = useSelector((state: RootState) => state.mainSlice.userData);
 console.log("data",data);

  return (
    <section className=" w-[90%] ">
      <UserTable columns={columns} data={data || []} />
    </section>
  );
}
