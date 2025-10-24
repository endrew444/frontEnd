import { NextRequest, NextResponse } from 'next/server';
import connectToDatabase from '../lib/mongodb';
import Consulta from '../models/Consulta';

export async function GET(request: NextRequest) {
  try {
    await connectToDatabase();
    const consultas = await Consulta.find({}).populate('paciente').populate('medico');
    return NextResponse.json(consultas);
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao buscar consultas' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectToDatabase();
    const { paciente, medico, data, hora, status } = await request.json();
    const consulta = new Consulta({ paciente, medico, data, hora, status });
    await consulta.save();
    return NextResponse.json(consulta, { status: 201 });
  } catch (error) {
    if (error && typeof error === 'object' && 'code' in error && error.code === 11000) {
      return NextResponse.json({ error: 'Horário já ocupado para este médico' }, { status: 400 });
    }
    return NextResponse.json({ error: 'Erro ao criar consulta' }, { status: 500 });
  }
}
