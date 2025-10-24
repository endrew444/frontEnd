import mongoose, { Schema, Document } from 'mongoose';

export interface IPaciente extends Document {
  nome: string;
  telefone: string;
}

const PacienteSchema: Schema = new Schema({
  nome: { type: String, required: true },
  telefone: { type: String, required: true },
});

export default mongoose.models.Paciente || mongoose.model<IPaciente>('Paciente', PacienteSchema);
