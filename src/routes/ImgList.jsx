import classes from "./ImgList.module.css";

import { Outlet } from "react-router-dom";

function ImgList() {
   return (
      <>
         <div className={classes.listContainer}>

         </div>
         <Outlet />
      </>
   )
}

export default ImgList;