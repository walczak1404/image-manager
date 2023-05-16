import Modal from "../components/Modal";
import DatabaseHandler from "../database/DatabaseHandler";
import { useLoaderData } from "react-router-dom";

function FullImage(props) {
   const src = useLoaderData();

   return(
      <Modal>
         <img src={src} alt="Photo from database" />
      </Modal>
   )
}

export default FullImage;

export async function loader({params}) {
   console.log(params.id);

   const imgUrl = await DatabaseHandler.getSingleImageFromDatabase(params.id);

   return imgUrl;
}