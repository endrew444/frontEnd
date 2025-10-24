import { NextRequest, NextResponse } from 'next/server';
import connectToDatabase from '../lib/mongodb';
import Medico from '../models/Medico';

export async function GET() {
  try {
    await connectToDatabase();
    const medicos = await Medico.find({});
    return NextResponse.json(medicos);
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao buscar médicos' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectToDatabase();
    const { nome, especialidade } = await request.json();
    const medico = new Medico({ nome, especialidade });
    await medico.save();
    return NextResponse.json(medico, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao criar médico' }, { status: 500 });
  }
}
