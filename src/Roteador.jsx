import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PaginaLog from "./paginas/PaginaLog/PaginaLog";
import CriarTask from "./paginas/CriarTask/CriarTask";
import PaginaTarefas from "./paginas/PaginaTarefas/PaginaTarefas";

const router = createBrowserRouter([
  {
    path: "",
    element: <PaginaLog />,
  },
  {
    path: "create-task",
    element: <CriarTask />,
  },
  {
    path: "tasks",
    element: <PaginaTarefas />,
  },
]);

function Roteador() {
  return <RouterProvider router={router} />;
}

export default Roteador;