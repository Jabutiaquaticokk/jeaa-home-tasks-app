import { useState, useEffect } from "react";
import { Trash2, CheckCircle } from "lucide-react";

import "./PaginaTarefas.css"

function PaginaTarefas() {
    const [tarefas, setTarefas] = useState(() => {
        try {
            return JSON.parse(
                localStorage.getItem("hometasks_tarefas")
            ) || [];
        } catch {
            return [];
        }
    });

    // Atualiza o armazenamento
    useEffect(() => {
        localStorage.setItem(
            "hometasks_tarefas",
            JSON.stringify(tarefas)
        );
    }, [tarefas]);

    // Concluir tarefa
    function concluirTarefa(id) {
        setTarefas((atuais) =>
            atuais.map((tarefa) =>
                tarefa.id === id
                    ? { ...tarefa, concluida: !tarefa.concluida }
                    : tarefa
            )
        );
    }

    // Excluir tarefa
    function excluirTarefa(id) {
        setTarefas((atuais) =>
            atuais.filter((tarefa) => tarefa.id !== id)
        );
    }

    return (
        <main className="tasks-page">

            <h1>Minhas tarefas</h1>

            <p>
                Você tem {tarefas.length} tarefas cadastradas.
            </p>

            {tarefas.length === 0 ? (
                <p>Nenhuma tarefa cadastrada ainda.</p>
            ) : (

                tarefas.map((tarefa) => (

                    <div className="task-item" key={tarefa.id}>

                        <div className="task-info">

                            <h3
                                className={
                                    tarefa.concluida ? "concluida" : ""
                                }
                            >
                                {tarefa.nome}
                            </h3>

                            <p>{tarefa.descricao}</p>

                            <small>
                                {tarefa.data} às {tarefa.horario}
                            </small>

                        </div>

                        <div className="task-actions">

                            <button
                                onClick={() => concluirTarefa(tarefa.id)}
                                aria-label="Concluir tarefa"
                            >
                                <CheckCircle size={20} />
                            </button>

                            <button
                                onClick={() => excluirTarefa(tarefa.id)}
                                aria-label="Excluir tarefa"
                            >
                                <Trash2 size={20} />
                            </button>

                        </div>

                    </div>

                ))

            )}

        </main>
    );
}


export default PaginaTarefas;