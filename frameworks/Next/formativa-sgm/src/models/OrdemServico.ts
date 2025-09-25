// classe de modelagem de dados para Ordens de Serviço

import mongoose, { Document, Model, Schema } from "mongoose";

export interface IOrdemServico extends Document {
    _id: string;
    titulo: string;
    descricao: string;
    tipoManutencao: string;
    status: string;
    idTecnico: mongoose.Types.ObjectId; 
    idEquipamento: mongoose.Types.ObjectId;
}

const OrdemServicoSchema: Schema<IOrdemServico> = new Schema({
    titulo: { type: String, required: true },
    descricao: { type: String, required: true },
    tipoManutencao: { type: String, required: true },
    status: { type: String, required: true, enum: ["Aberta", "Em Andamento", "Finalizada"], default: "Aberta" },
    idTecnico: { type: mongoose.Schema.Types.ObjectId, ref: "Usuario", required: true },
    idEquipamento: { type: mongoose.Schema.Types.ObjectId, ref: "Equipamento", required: true }
}, {
    timestamps: true
});

//toMap // FromMap
const OrdemServico: Model<IOrdemServico> = mongoose.models.OrdemServico || mongoose.model<IOrdemServico>("OrdemServico", OrdemServicoSchema);

export default OrdemServico;
