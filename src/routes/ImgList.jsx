import ImagePreview from "../components/ImagePreview";
import classes from "./ImgList.module.css";

import { Outlet, useLoaderData } from "react-router-dom";

function ImgList() {
   const data = useLoaderData();

   return (
      <>
         <ul className={classes.listContainer}>
            {data.map(img => <ImagePreview key={img.imgId} img={img.source} />)}
         </ul>
         <Outlet />
      </>
   )
}

export default ImgList;