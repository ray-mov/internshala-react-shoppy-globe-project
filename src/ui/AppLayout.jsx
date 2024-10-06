import { Outlet } from "react-router-dom";
import Narbar from "./Narbar";

function AppLayout() {
  return (
    <>
      <Narbar />
      <main className=" mx-auto max-w-[80%]">
        <Outlet />
      </main>
    </>
  );
}

export default AppLayout;
