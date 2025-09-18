import mongoose, { Document, Model, Schema } from "mongoose";

// Interface com os campos da tarefa
export interface Itarefa extends Document {
  _id: string;
  titulo: string;
  concluida: boolean;
  dataCriacao: Date;
}

// Schema da tarefa
const TarefaSchema: Schema<Itarefa> = new mongoose.Schema({
  titulo: {
    type: String,
    required: [true, "O título é obrigatório"],
    maxlength: [50, "Máximo de 50 caracteres"]
  },
  concluida: {
    type: Boolean,
    default: false
  },
  dataCriacao: {
    type: Date,
    default: Date.now
  }
});

// Verificação correta do modelo antes de criar
const Tarefa: Model<Itarefa> = mongoose.models.Tarefa || mongoose.model<Itarefa>("Tarefa", TarefaSchema);

export default Tarefa;
