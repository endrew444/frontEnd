"use client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import DashboardTecnico from "../componentes/dashboards/DashboardTecnico";
import DashboardGerente from "../componentes/dashboards/DashboardGerente";
import DashboardAdmin from "../componentes/dashboards/DashboardAdmin";

 //tela de UI

export default function DashboardPage(){
    const route = useRouter();
    const [funcao, setFuncao] = useState<string | null>(null);

    //antes de carregar os elementos visuais
    useEffect(()=>{
        const funcao = localStorage.getItem("funcao");
        if(!funcao){
            //se não tiver a função armazenada no localStorage -> devolve o usuário para tela de login
            route.push("/login");
        } else{
            //atribui a variavel setFuncao -> o valor da LocalStorage
            setFuncao(funcao);
        }
    });

    // método de logout
    const handleLogout = async()=>{
        localStorage.removeItem("token");
        localStorage.removeItem("funcao");
        route.push("/login");
    };

    //montar a tela de acordo com a função do usuário
    const renderDashboard = () =>{
        if(funcao?.toLowerCase() === "admin"){
            return <DashboardAdmin/>;
        }else if(funcao === "gerente"){
            return <DashboardGerente/>;
        }else if(funcao === "tecnico"){
            return <DashboardTecnico/>;
        }
    }

    //react dom
    return(
        <div>
            <header>
                <h1>Bem-Vindo</h1>
                <button onClick={handleLogout}>Logou</button>
            </header>
            <main>
                {renderDashboard()}
            </main>
        </div>
    );
}