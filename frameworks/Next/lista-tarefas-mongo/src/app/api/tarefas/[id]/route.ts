//rotas que precisam de ID (GET // PUT // DELETE)

import { deleteTarefa, updateTarefa } from "@/controller/tarefaController";
import { NextRequest, NextResponse } from "next/server";

interface Parametro{
    id:string;
}

//PATH -> atualizar a tarefa
export async function PATCH(req: NextRequest, {params}:{params:Parametro}){
    try {
        const {id} = params; //pegar o ID dos parâmetros
        const data = await req.json();
        const tarefaAtualizada = await updateTarefa(id, data);
        if(!tarefaAtualizada){//null
            return NextResponse.json({success:false, error:"Tarefa não encontrada"});
        }
        return NextResponse.json({success:true, data:tarefaAtualizada});
    } catch (error) {
        return NextResponse.json({success:false, error:error});
    }
}
//DELETE -> deletar a tarefa
export async function DELETE({params}:{params:Parametro}) {
    try {
        const {id}=params;
        const resultado = await deleteTarefa(id);
        if(!resultado){
            return NextResponse.json({success:false, error:"Not Found"});
        }
        return NextResponse.json({success:true, data:{}});
    } catch (error) {
         return NextResponse.json({success:false, error:error});
    }
}