import { useNavigate } from "react-router-dom";
import classes from "./Modal.module.css";

function Modal(props) {
   const navigate = useNavigate();

	return (
      <>
         <div className={classes.backdrop} onClick={() => {navigate("/image-manager/")}} />
         <div className={classes.dialog}>
               {props.children}
         </div>
      </>
   );
}

export default Modal;
