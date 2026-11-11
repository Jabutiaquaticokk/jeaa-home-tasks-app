import { Link } from "react-router-dom";
import "./Principal.css";
import { IoIosArrowBack } from "react-icons/io";


function Principal(props) {
  return <main className="Principal_root">
    <div className="Principal_titulo">
      {props.returnButton !== '' && <Link to={props.returnButton} className="return_root">
        <IoIosArrowBack size={24} />
      </Link>}
      <h2 >{props.titulo}</h2>
    </div>

    {props.children}
  </main>;
}

export default Principal;
