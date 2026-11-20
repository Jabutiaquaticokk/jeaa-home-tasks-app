import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PaginaLog from "./paginas/PaginaLog/PaginaLog";
import CriarTask from "./paginas/CriarTask/CriarTask";

const router = createBrowserRouter([
  {
    path: "",
    element: <PaginaLog />,
  },
  {
    path: "create-task",
    element: <CriarTask />,
  },
]);

function Roteador() {
  return <RouterProvider router={router} />;
}

export default Roteador;