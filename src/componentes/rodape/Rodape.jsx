
import { NavLink } from "react-router-dom";

import {
  House,
  ClipboardList,
  Plus,
  Search,
  UserRound
} from "lucide-react";

import "./Rodape.css";

function Rodape() {

  const items = [
    {
      id: "inicio",
      label: "HOME",
      path: "/inicio",
      icon: House
    },
    {
      id: "tasks",
      label: "TASKS",
      path: "/tasks",
      icon: ClipboardList
    },
    {
      id: "criar",
      label: "CRIAR",
      path: "/criar",
      icon: Plus
    },
    {
      id: "pesquisar",
      label: "PESQUISAR",
      path: "/pesquisar",
      icon: Search
    },
    {
      id: "perfil",
      label: "PERFIL",
      path: "/perfil",
      icon: UserRound
    }
  ];

  return (
    <nav className="bottom-nav">

      {items.map((item) => {
        const Icon = item.icon;

        return (
          <NavLink
            key={item.id}
            to={item.path}
            className={({ isActive }) =>
              `nav-item ${isActive ? "active" : ""} ${
                item.id === "criar" ? "nav-create" : ""
              }`
            }
          >

            <div className={
              item.id === "criar"
                ? "create-icon"
                : "nav-icon"
            }>
              <Icon size={item.id === "criar" ? 25 : 20} />
            </div>

            <span>{item.label}</span>

          </NavLink>
        );
      })}

    </nav>
  );
}

export default Rodape;
