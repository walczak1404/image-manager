import { Link } from "react-router-dom";
import classes from "./AddVideoButton.module.css";

function AddVideoButton() {
   return (
      <div className={classes.container}>
         <Link to="add-movie" className={classes.btn}>Add new movie</Link>
      </div>
   )
}

export default AddVideoButton;