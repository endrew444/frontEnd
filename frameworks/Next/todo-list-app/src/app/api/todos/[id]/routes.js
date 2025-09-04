// criar as function put e delete
import connectMongo from "@/services/mongodb";
import Todo from "@/models/Todo";

import { NextResponse } from "next/server";

export async function PUT(req, {params}) {
    try {
        await connectMongo();
        const data = await req.json();  
        const tarefaAtualuizada = await Todo.findByIdAndUpdate(id.id, data,{
            new: true,
            runValidators: true
        })
        if(!tarefaAtualuizada) {
            return NextResponse.json({success: false},{status: 400});
        }
        return NextResponse.json({success: true, data: tarefaAtualuizada});
    } catch (error) {
        return NextResponse.json({success: false}, {status: 500});
    }
}

export async function DELETE(req, {params}) {
    try {
        await connectMongo();
        const deleteTarefa = await Todo.deletOne({
            _id: id.id
        });
        if(!deleteTarefa) {
            return NextResponse.json({success: false}, {status: 400});
        }
        return NextResponse.json({success: true, data: {}});
    } catch (error) {
        return NextResponse.json({success: false}, {status: 500});
    }
}