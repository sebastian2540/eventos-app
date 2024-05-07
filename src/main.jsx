import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ListaEventos from "./layouts/components/pages/ListaEventos.jsx";

let router = createBrowserRouter([
    {
        path: "/listaeventos",
        element: <ListaEventos />
    },
    {
        path: "/",
        element: <App />
    }
])
   
ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);