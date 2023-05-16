import { Form, redirect } from "react-router-dom";
import Modal from "../components/Modal";
import classes from './NewImg.module.css';

import { useState } from "react";

import DatabaseHandler from "../database/DatabaseHandler";

function NewImg() {

   const [ imgList, updateImgList ] = useState([]);
   
   function newImgsHandler(event) {
      updateImgList(Array.from(event.target.files));
   }

   return(
      <Modal>
         <Form method="POST" encType="multipart/form-data">
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
   const files = [...document.getElementById("img-adder").files];

   const imgURLs = await Promise.all(files.map(file => readAsDataURL(file)));

   await DatabaseHandler.addImagesToDatabase(imgURLs);

   //files.forEach(async file => {
      // new Promise(res => {
      //    const reader = new FileReader();
      
      //    reader.addEventListener("load", () => {
      //       console.log("reader", reader.result);
      //       res(reader.result);
      //    })

      //    reader.readAsDataURL(file);
      // }).then(data => {localStorage.setItem(localStorage.length, data)});
   //});

   return redirect("..");
}

function readAsDataURL(file) {
   return new Promise((resolve, reject)=>{
      let fileReader = new FileReader();
      fileReader.onload = function(){
         console.log(fileReader.result);
         return resolve(fileReader.result);
      }
      fileReader.readAsDataURL(file);
   })
}