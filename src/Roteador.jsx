import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import Inicio from "./paginas/Inicio/Inicio";
import Tasks from "./paginas/Tasks/Tasks";
import CriarTask from "./paginas/CriarTask/CriarTask";


import Rodape from "./componentes/rodape/Rodape";

function Roteador() {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Navigate to="/inicio" replace />}
        />

        <Route path="/inicio" element={<Inicio />} />

        <Route path="/tasks" element={<Tasks />} />

        <Route path="/criar" element={<CriarTask />} />

        {/* <Route path="/pesquisar" element={<Pesquisar />} />

        <Route path="/perfil" element={<Perfil />} /> */}

      </Routes>

      <Rodape />

    </BrowserRouter>
  );
}

export default Roteador;
