"use-client";

import { IOrdemServico } from "@/models/OrdemServico";
import { useEffect, useState } from "react";

export default function DashboardGerente() {
    // armazenar as tarefas em um vetor
    const [ordens, setOrdens] = useState<IOrdemServico[]>([]);

    useEffect(() => {
        fetchOrdens();
    }, []);

    const fetchOrdens = async () => {
        try {
            const resposta = await fetch("/api/ordemservico");
            const data = await resposta.json();
            if (data.success) {
                setOrdens(data.data);
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h3>Ordens de Serviço</h3>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Descrição</th>
                        <th>Status</th>
                        <th>Tipo de Manutenção</th>
                        <th>Data Solicitação</th>
                        <th>Data Finalização</th>
                        <th>Id Equipamento</th>
                    </tr>
                </thead>
                <tbody>
                    {ordens.map((ordem) => (
                        <tr key={ordem._id}>
                            <td>{ordem.titulo}</td>
                            <td>{ordem.descricao}</td>
                            <td>{ordem.status}</td>
                            <td>{ordem.tipoManutencao}</td>
                            <td>{new Date(ordem.dataSolicitada).toLocaleDateString()}</td>
                            <td>{ordem.dataFinalizada ? new Date(ordem.dataFinalizada).toLocaleDateString() : ""}</td>
                            <td>{ordem.equipamentoId}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}