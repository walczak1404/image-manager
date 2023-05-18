import Modal from "../components/Modal";
import DatabaseHandler from "../database/DatabaseHandler";
import { useLoaderData, useNavigate } from "react-router-dom";

import classes from "./FullImage.module.css";

function FullImage() {

   const img = useLoaderData();

   const src = img.source;

   const navigate = useNavigate();

   async function changeImage(direction) {
      if(direction!=="RIGHT" && direction!=="LEFT") return;

      try {
         const image = await DatabaseHandler.getImageNextToCurrent(direction, img.imgId);

         navigate(`../${image.imgId}`);
      } catch(e) {
         if(direction==="RIGHT") console.log("last image");
         else console.log("first image");
      }
   }

   return(
      <Modal>
         <div className={classes.arrow} onClick={changeImage.bind(this, "LEFT")}> &#10094; </div>
         <img src={src} alt="Photo from database" className={classes.img} />
         <div className={classes.arrow} onClick={changeImage.bind(this, "RIGHT")}> &#10095; </div>
      </Modal>
   )
}

export default FullImage;

export async function loader({params}) {
   const imgUrl = await DatabaseHandler.getSingleImageFromDatabase(params.id);

   return imgUrl;
}