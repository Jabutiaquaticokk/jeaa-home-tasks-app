import { UserRound } from "lucide-react";
import "./Cabecalho.css";

function Cabecalho() {
  return (
    <header className="header">
      
      <div className="title">
      </div>

      <button className="usuario-btn">
        <UserRound />
      </button>

    </header>
  );
}

export default Cabecalho;
