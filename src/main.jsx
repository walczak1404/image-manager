import { RouterProvider, createBrowserRouter } from "react-router-dom";

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import MainView, { loader as imgLoader } from "./routes/MainView";
import NewImg from "./routes/NewImg";
import {action as newImgAction} from "./routes/NewImg";
import ImgList from "./routes/ImgList";
import ErrorElement from "./components/ErrorElement";
import FullImage, { loader as fullImgLoader } from "./routes/FullImage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainView />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: "/",
        element: <ImgList />,
        loader: imgLoader,
        children: [
          { path: "add-image", element: <NewImg />, action: newImgAction },
          { path: ":id", element: <FullImage />, loader: fullImgLoader }
        ]
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
