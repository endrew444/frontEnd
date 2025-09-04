//indicar que é um componente do cliente side
"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [tarefas, setTarefas] = useState([]);
  const [newTarefa, setNewTarefa] = useState("");

  useEffect(() => {
    fetchTarefas();
  }, []);

  const fetchTarefas = async () =>{
    const response = await fetch("/api/todos");
    const data = await response.json();
    setTarefas(data.data);
  }

  async function addTarefa(){
    const response = await fetch("/api/todos", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ title: newTarefa})
  });
    const data = await response.json();
    setTarefas([...tarefas, data.data]);
    setNewTarefa("");
  }
}