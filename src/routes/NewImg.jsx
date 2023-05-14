import { Form, redirect } from "react-router-dom";
import Modal from "../components/Modal";
import classes from './NewImg.module.css';

import { useState } from "react";

function NewImg() {

   const [ imgList, updateImgList ] = useState([]);
   
   function newImgsHandler(event) {
      updateImgList(Array.from(event.target.files));
   }

   return(
      <Modal>
         <Form method="POST">
            <label htmlFor="img-adder">
               <span className={classes.chooseBtn}>Choose images</span>
            </label>
            <input type="file" name="movieInput" multiple accept="image/*" id="img-adder" onChange={newImgsHandler} />
            <ul className={classes.imgList}>
               {imgList.map(img => <li key={img.name}>{img.name}</li>)}
            </ul>
            <div className={classes.btnContainer}>
               <button>Submit images</button>
            </div>
         </Form>
      </Modal>
   )
}

export default NewImg;

export async function action() {

   console.log(document.getElementById("img-adder").files);

   const files = Array.from(document.getElementById("img-adder").files);

   files.forEach(file => {

      new Promise(res => {
         const reader = new FileReader();
      
         reader.addEventListener("load", () => {
            res(reader.result);
         })

         reader.readAsDataURL(file);
      }).then(data => {localStorage.setItem(localStorage.length, data)})
   });

   return redirect("..");
}