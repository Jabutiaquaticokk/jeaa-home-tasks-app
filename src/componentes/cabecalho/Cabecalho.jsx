import { UserRound } from "lucide-react";
import "./Cabecalho.css";

function Cabecalho() {
  return (
    <header className="header">
      
      <div className="saudacao">
        <h1>Olá, José! 👋</h1>

        <span>Vamos organizar nossas tarefas!</span>
      </div>

      <button className="usuario-btn">
        <UserRound />
      </button>

    </header>
  );
}

export default Cabecalho;
