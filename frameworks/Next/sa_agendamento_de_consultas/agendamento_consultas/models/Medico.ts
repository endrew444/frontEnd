import mongoose, { Schema, Document } from 'mongoose';

export interface IMedico extends Document {
  nome: string;
  especialidade: string;
}

const MedicoSchema: Schema = new Schema({
  nome: { type: String, required: true },
  especialidade: { type: String, required: true },
});

export default mongoose.models.Medico || mongoose.model<IMedico>('Medico', MedicoSchema);
