"use client";

import { Itarefa } from "@/models/Tarefa";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

export default function Home(){
  //useState => armazenamento LocalStorage
  //armazenar as tarefas em um vetyor[armazenamento, editor do armazenamento]
  const [tarefas, setTarefas] = useState<Itarefa[]>([]);

  //armazenamento de uma string para o input
  const [novaTarefa, setNovaTarefa] = useState<string>("");

  //useEffect => permite a execução de funções sem o recarregamento da tela
  useEffect(()=>{
    //carregar trodas as tarefas do bd
    buscarTarefas();
  },[]);

  //criar as funções que serão executadas na tela
  const buscarTarefas = async() =>{
    try {
      //fetch => metodo GET é padrão não precisa declarar
      const resposta = await fetch("/api/tarefas");
      //realizar a conexão http com o backend
      const data= await resposta.json();
      if(data.success){
        setTarefas(data.data); //atualiza o vetor de tarefas
      }
    } catch (error) {
      console.error(error);//exibe o erro no console
    }
}

//adc tarefa
const adicionarTarefa = async(e: FormEvent) =>{
  e.preventDefault(); //evita o recarregamento da página em eventos html
  //verificar c o texto nn esta vazio
  if(!novaTarefa.trim()) return;//nn permite adc tarefas vazias no bd
  try {
     const resultado = await fetch("api/tarefas",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify({titulo:novaTarefa})
    });
    const data = await resultado.json();
    if(data.success){{
      setNovaTarefa("");//limpa o input
      //client side - sem buscar a tarefa no bd
      setTarefas([...tarefas, data.data]);
      //server side - buscar a tarefa no bd
      buscarTarefas();
    }}
  } catch (error) {
    console.error(error);
    
  }
}
//atualizar tarefa
const atualizarTarefa = async (id: string, status: boolean) =>{
  try {
    const resposta = await fetch(`/api/tarefas/${id}`,{
      method:"PATCH",
      headers: {"Content-type":"application/json"},
      body: JSON.stringify({concluida: !status})
    });
    const data = await resposta.json();
    if(data.success){
      //cliente side
      setTarefas(tarefas.map((tarefa)=>(tarefa._id ===id ? data.data : tarefa)));
      //servefr side
      buscarTarefas();
    }
  } catch (error) {
    console.error(error);
  }
}

//deletar tarefa
 const deletarTarefa = async(id:string) =>{
    try {
      await fetch(`/api/tarefas/${id}`,{
        method:"DELETE",
      })
      buscarTarefas();
    } catch (error) {
      console.error(error);
    }
  }
//interface do usuario reactdom
  return(
    <div>
      <h1>Lista de Tarefas</h1>
      <form onSubmit={adicionarTarefa}>
        <input type="text"
        value={novaTarefa}
        onChange={(e:ChangeEvent<HTMLInputElement>)=> setNovaTarefa(e.target.value)}
        placeholder="Adicionar Uma Nova Tarefa" />
        <button type="submit">Adicionar Tarefa</button>
      </form>
      <ul>
        {tarefas.map((tarefa)=>(
          <li key={tarefa._id.toString()}>
            <input type="checkbox" 
            checked={tarefa.concluida}
            onChange={()=>atualizarTarefa(tarefa._id.toString(), tarefa.concluida)}/>
            {tarefa.titulo}
            <button onClick={()=>deletarTarefa(tarefa._id)}>Deletar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
