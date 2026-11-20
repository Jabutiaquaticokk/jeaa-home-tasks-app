import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PaginaLog from "./paginas/PaginaLog/PaginaLog";

const router = createBrowserRouter([
  {
    path: "",
    element: <PaginaLog />,
  },
]);

function Roteador() {
  return <RouterProvider router={router} />;
}

export default Roteador;