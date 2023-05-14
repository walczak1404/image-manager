import { Outlet } from "react-router-dom";

import AddImgButton from "../components/AddImgButton";

function MainView() {
   return (
      <>
         <AddImgButton />
         <Outlet />
      </>
   )
}

export default MainView;