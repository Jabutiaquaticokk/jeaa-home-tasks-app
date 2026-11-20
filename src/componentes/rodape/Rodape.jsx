import { useState } from "react";
import { House, ClipboardList, UserRound, Search } from "lucide-react";
import "./Rodape.css";

function Rodape() {

  const [active, setActive] = useState('home');

  const menuItems = [
    { id: "inicio", label: "Início", icon: House },
    { id: "tarefas", label: "Tarefas", icon: ClipboardList },
    { id: "pesquisar", label: "Pesquisar", icon: Search },
    { id: "perfil", label: "Perfil", icon: UserRound }
  ]
  return (
    <nav className="Rodape_root">
      {menuItems.map((item) => {
        const Icon = item.icon;

        return (
          <button
            key={item.id}
            className={`nav-item ${active === item.id ? "active" : ""
              }`}
            onClick={() => setActive(item.id)}
          >
            <Icon size={24} />

            <span>{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
}

export default Rodape;
