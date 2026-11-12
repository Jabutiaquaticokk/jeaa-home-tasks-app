import { House, ClipboardList, UserRound, Search } from "lucide-react";
import "./Rodape.css";

function Rodape() {
  return (
    <nav className="Rodape_root">
      <a href="#home" className="active">
        <House />
        <span>Inicio</span>
      </a>
      <a href="#tasks">
        <ClipboardList />
        <span>Tasks</span>
      </a>
      <a href="#search">
        <Search />
        <span>Pesquisar</span>
      </a>
      <a href="#profile">
        <UserRound />
        <span>Perfil</span>
      </a>
    </nav>
  );
}

export default Rodape;
