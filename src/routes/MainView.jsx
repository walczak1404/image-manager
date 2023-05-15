import { Outlet } from "react-router-dom";

import AddImgButton from "../components/AddImgButton";

import DatabaseHandler from "../database/DatabaseHandler";

function MainView() {
   return (
      <>
         <AddImgButton />
         <Outlet />
      </>
   )
}

export async function loader() {
   const images = await DatabaseHandler.getImagesFromDatabase();
   
   return images;
}

export default MainView;