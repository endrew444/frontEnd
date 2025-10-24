import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  email: string;
  password: string;
  role: 'paciente' | 'medico' | 'recepcionista';
  paciente?: mongoose.Types.ObjectId;
  medico?: mongoose.Types.ObjectId;
}

const UserSchema: Schema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['paciente', 'medico', 'recepcionista'], required: true },
  paciente: { type: Schema.Types.ObjectId, ref: 'Paciente' },
  medico: { type: Schema.Types.ObjectId, ref: 'Medico' },
});

export default mongoose.models.User || mongoose.model<IUser>('User', UserSchema);
