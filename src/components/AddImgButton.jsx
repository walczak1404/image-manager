import { Link } from "react-router-dom";
import classes from "./AddImgButton.module.css";

function AddImgButton() {
   return (
      <div className={classes.container}>
         <Link to="add-image" className={classes.btn}>Add new image</Link>
      </div>
   )
}

export default AddImgButton;