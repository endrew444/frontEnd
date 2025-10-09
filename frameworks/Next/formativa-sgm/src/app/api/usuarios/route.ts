//rotas que não precisa passar o ID (GET e POST)

import { createUsuario, getAllUsuario } from "../../../controllers/UsuarioController";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(){
    //verificar a sessão do usuário
    //se (sessão ativa e usuario ==admin)
    // const session = await getServerSession(authOptions);
    // if(!session || session.user?.role !== "admin"){
    //     return NextResponse.json({success: false, error: "Não autorizado"})
    // }
    try {
        const data = await getAllUsuario();//chama o controlador
        return NextResponse.json({success:true, data:data});
    } catch (error) {
        return NextResponse.json({success:false,error:error});        
    }
}

export async function POST(req: NextRequest) { //req são os dados que estou enviando
    try {
        const data = await req.json();
        const newUsuario = await createUsuario(data);
        return NextResponse.json({success:true, data: newUsuario});
    } catch (error) {
        return NextResponse.json({success:false,error:error}); 
    }
}
