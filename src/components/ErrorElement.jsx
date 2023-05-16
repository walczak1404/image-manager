import classes from "./ErrorElement.module.css";
import Modal from "./Modal";

import { useRouteError } from "react-router-dom";

function NewImgError() {
   const error = useRouteError();

   return (
      <Modal>
         <div className={classes.container}>
            <h2>An error ocurred!</h2>
            <p>{error.message}</p>
         </div>
      </Modal>
   )
}

export default NewImgError;