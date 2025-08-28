import "./ToDoList.css";
const ToDoList = ({tarefas, removerTarefa}) => {
    //retporna a lista de tarefas
    return(
        //lista nao ordenada
        <ul>
            
            {tarefas.map((tarefa,index) => (
                <li key={index}>
                    {tarefa}
                    <button onClick={()=>removerTarefa(index)}>Excluir</button>
                </li>
            ))}
        </ul>
    );
};

export default ToDoList;