
import { useState, useEffect } from "react";
import "./CriarTask.css";

const STORAGE_KEY = "hometasks_tarefas";

function CriarTask() {

  const [tarefas, setTarefas] = useState(() => {
    try {
      const dados = localStorage.getItem(STORAGE_KEY);
      return dados ? JSON.parse(dados) : [];
    } catch {
      return [];
    }
  });

  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [data, setData] = useState("");
  const [horario, setHorario] = useState("");
  const [repeticao, setRepeticao] = useState("nao");
  const [mensagem, setMensagem] = useState("");

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(tarefas)
    );
  }, [tarefas]);

  function limparFormulario() {
    setNome("");
    setDescricao("");
    setData("");
    setHorario("");
    setRepeticao("nao");
    setMensagem("");
  }

  function criarTarefa(e) {
    e.preventDefault();

    const novaTarefa = {
      id: Date.now(),
      nome,
      descricao,
      data,
      horario,
      repeticao,
      concluida: false,
      criadaEm: new Date().toISOString()
    };

    setTarefas((tarefasAtuais) => [
      ...tarefasAtuais,
      novaTarefa
    ]);

    setMensagem("Tarefa criada com sucesso!");

    limparFormulario();
  }

  return (
    <main className="criar-page">


      <section className="task-card">


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
            type="button"
            className="cancel-button"
            onClick={limparFormulario}
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
