import { Outlet } from "react-router-dom";

import AddVideoButton from "../components/AddVideoButton";

function MainView() {
   return (
      <>
         <AddVideoButton />
         <Outlet />
      </>
   )
}

export default MainView;