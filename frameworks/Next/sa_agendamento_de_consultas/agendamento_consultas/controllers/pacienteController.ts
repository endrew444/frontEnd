import { NextRequest, NextResponse } from 'next/server';
import connectToDatabase from '../lib/mongodb';
import Paciente from '../models/Paciente';

export async function GET() {
  try {
    await connectToDatabase();
    const pacientes = await Paciente.find({});
    return NextResponse.json(pacientes);
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao buscar pacientes' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectToDatabase();
    const { nome, telefone } = await request.json();
    const paciente = new Paciente({ nome, telefone });
    await paciente.save();
    return NextResponse.json(paciente, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao criar paciente' }, { status: 500 });
  }
}
