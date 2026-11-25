import { useState } from "react";
import {
  House,
  ClipboardList,
  Plus,
  Search,
  UserRound
} from "lucide-react";

import "./Rodape.css";

function Rodape() {
  const [active, setActive] = useState("criar");

  const items = [
    { id: "home", label: "HOME", icon: House },
    { id: "tasks", label: "TASKS", icon: ClipboardList },
    { id: "criar", label: "CRIAR", icon: Plus },
    { id: "pesquisar", label: "PESQUISAR", icon: Search },
    { id: "perfil", label: "PERFIL", icon: UserRound }
  ];

  return (
    <nav className="bottom-nav">

      {items.map((item) => {
        const Icon = item.icon;
        const selected = active === item.id;

        return (
          <button
            key={item.id}
            className={`nav-item ${selected ? "active" : ""}`}
            onClick={() => setActive(item.id)}
          >
            <div className={item.id === "criar" ? "create-icon" : "nav-icon"}>
              <Icon size={item.id === "criar" ? 25 : 20} />
            </div>

            <span>{item.label}</span>
          </button>
        );
      })}

    </nav>
  );
}

export default Rodape;