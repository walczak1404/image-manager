import { Form, redirect } from "react-router-dom";
import Modal from "../components/Modal";
import classes from './NewMovie.module.css';

import { useState } from "react";

function NewMovie() {

   const [ movieList, updateMovieList ] = useState([]);
   
   function newMoviesHandler(event) {
      updateMovieList(Array.from(event.target.files));
   }

   return(
      <Modal>
         <Form method="POST">
            <label htmlFor="movie-adder">
               <span className={classes.chooseBtn}>Choose movies</span>
            </label>
            <input type="file" name="movieInput" multiple accept="video/*" id="movie-adder" onChange={newMoviesHandler} />
            <ul className={classes.movieList}>
               {movieList.map(movie => <li key={movie.name}>{movie.name}</li>)}
            </ul>
            <div className={classes.btnContainer}>
               <button>Submit movies</button>
            </div>
         </Form>
      </Modal>
   )
}

export default NewMovie;

export async function action() {

   const files = Array.from(document.getElementById("movie-adder").files);

   files.forEach(file => {
      const reader = new FileReader();

      const fileObject = {
         name: file.name,
         size: file.size,
         type: file.type,
      }

      reader.addEventListener("load", () => {
         fileObject.content = reader.result;
      })

      reader.readAsDataURL(file);

      localStorage.setItem(localStorage.length, fileObject);
      

   });

   return redirect("..");
}