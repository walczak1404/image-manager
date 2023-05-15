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

   images.sort((i1, i2) => i1.imgId > i2.imgId ? 1 : i1.imgId === i2.imgId ? 0 : -1);

   return images;
}

export default MainView;