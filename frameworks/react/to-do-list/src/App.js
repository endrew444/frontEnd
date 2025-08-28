import { useState } from "react";

import ToDoForm from "./componentes/ToDoForm";
import ToDoList from "./componentes/ToDoList";

const App = () => {
  const [tarefas, setTarefas] = useState([]);
  //estado pra armazenamento das tarefas

  const addTarefa = (tarefa) => {
    setTarefas([...tarefas, tarefa]);
    //adiciona nova tarefa ao array de tarefas, ...tarefas -> copia o array existente
    //que já estao adicionadas anteriormente
  };

   const removerTarefa = (index) => {
    setTarefas(tarefas.filter((_,i)=> i !== index));
  };

  //view
  return (
    <div>
      <h1>To-Do-List App</h1>
      <ToDoForm addTarefa={addTarefa} />
      <ToDoList tarefas={tarefas} removerTarefa={removerTarefa}/>

    </div>
  )
};

export default App;
//componente principal do meu aplicativo
