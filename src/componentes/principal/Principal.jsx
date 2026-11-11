import "./Principal.css";


function Principal(props) {
  return <main className="Principal_root">
    <div className="Principal_titulo">
      <h1>Lista de Tarefas</h1>
    </div>

    {props.children}
  </main>;
}

export default Principal;
