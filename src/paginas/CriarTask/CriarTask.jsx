
import { useState } from "react";
import "./CriarTask.css";
// import { salvarLocalStorage } from "../../servicos/localStorage.servico";

function CriarTask() {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [data, setData] = useState("");
  const [horario, setHorario] = useState("");
  const [repeticao, setRepeticao] = useState("nao");
  const [mensagem, setMensagem] = useState("");

  function criarTarefa(e) {
    e.preventDefault();

    const tarefa = {
      nome,
      descricao,
      data,
      horario,
      repeticao
    };

    console.log("Tarefa criada:", tarefa);

    setMensagem("Tarefa cadastrada com sucesso!");

    setNome("");
    setDescricao("");
    setData("");
    setHorario("");
    setRepeticao("nao");
  }

  // const salvar = () => {
  //   salvarLocalStorage(tarefa)
  // }

  return (
    <main className="criar-page">

      <section className="task-card">

        <header className="task-header">
          <div>
            <h1>Criar task</h1>
          </div>

        </header>

        <div className="form-intro">
          <p>Organize sua próxima tarefa.</p>
          <small>* Campos obrigatórios</small>
        </div>

        <form onSubmit={criarTarefa}>

          <div className="form-group">
            <label>Nome da task *</label>

            <input
              type="text"
              placeholder="Ex: Retirar o lixo"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Descrição (opcional)</label>

            <textarea
              placeholder="Adicione detalhes..."
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
            />
          </div>

          <div className="form-row">

            <div className="form-group">
              <label>Data *</label>

              <input
                type="date"
                value={data}
                onChange={(e) => setData(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Horário *</label>

              <input
                type="time"
                value={horario}
                onChange={(e) => setHorario(e.target.value)}
                required
              />
            </div>

          </div>

          <div className="form-group">
            <label>Repetição</label>

            <select
              value={repeticao}
              onChange={(e) => setRepeticao(e.target.value)}
            >
              <option value="nao">Não repetir</option>
              <option value="diariamente">Diariamente</option>
              <option value="semanalmente">Semanalmente</option>
              <option value="mensalmente">Mensalmente</option>
            </select>
          </div>

          <button type="submit" className="create-button">
            Criar task
          </button>

          <button
            type="reset"
            className="cancel-button"
            onClick={() => setMensagem("")}
          >
            Cancelar
          </button>

          {mensagem && (
            <p className="success-message">
              {mensagem}
            </p>
          )}

        </form>

      </section>
    </main>
  );
}

export default CriarTask;
