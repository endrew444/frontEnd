//criar as rotas que ñ precisam de ID (GET // POST)

import { createTarefa, readAllTarefas } from "@/controller/tarefaController";
import { NextRequest, NextResponse } from "next/server";

   export async function GET() {
    try {
        const tarefas = await readAllTarefas(); //chama o controlador 
        //tratar a resposta obtida pelo mongoDB
        return NextResponse.json({success:true, data:tarefas});
    } catch (error) {
        return NextResponse.json({success:false,error:error});
    }
}

export async function POST(req: NextRequest) {
    try {
        const data = await req.json();
        const newTarefa = await createTarefa(data); //chama o controller
        return NextResponse.json({success: true, data:newTarefa});
    } catch (error) {
        return NextResponse.json({success:false,error:error});
    }
}