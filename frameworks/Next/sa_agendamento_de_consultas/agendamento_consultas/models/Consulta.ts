import mongoose, { Schema, Document } from 'mongoose';

export interface IConsulta extends Document {
  paciente: mongoose.Types.ObjectId;
  medico: mongoose.Types.ObjectId;
  data: Date;
  hora: string;
  status: 'Agendada' | 'Confirmada' | 'Realizada' | 'Cancelada';
}

const ConsultaSchema: Schema = new Schema({
  paciente: { type: Schema.Types.ObjectId, ref: 'Paciente', required: true },
  medico: { type: Schema.Types.ObjectId, ref: 'Medico', required: true },
  data: { type: Date, required: true },
  hora: { type: String, required: true },
  status: { type: String, enum: ['Agendada', 'Confirmada', 'Realizada', 'Cancelada'], default: 'Agendada' },
});

// Índice único para evitar agendamentos duplicados no mesmo horário para o mesmo médico
ConsultaSchema.index({ medico: 1, data: 1, hora: 1 }, { unique: true });

export default mongoose.models.Consulta || mongoose.model<IConsulta>('Consulta', ConsultaSchema);
