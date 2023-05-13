import { RouterProvider, createBrowserRouter } from "react-router-dom";

import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import './index.css'
import MainView from "./routes/MainView";
import NewMovie from "./routes/NewMovie";
import {action as newMovieAction} from "./routes/NewMovie";
import MovieList from "./routes/MovieList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainView />,
    children: [
      {
        path: "/",
        element: <MovieList />,
        children: [
          { path: "add-movie", element: <NewMovie />, action: newMovieAction }
        ]
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
