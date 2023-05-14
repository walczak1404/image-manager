import { RouterProvider, createBrowserRouter } from "react-router-dom";

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import MainView from "./routes/MainView";
import NewImg from "./routes/NewImg";
import {action as newImgAction} from "./routes/NewImg";
import ImgList from "./routes/ImgList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainView />,
    children: [
      {
        path: "/",
        element: <ImgList />,
        children: [
          { path: "/add-image", element: <NewImg />, action: newImgAction }
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
