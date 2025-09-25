// classe de modelagem de dados para Equipamentos

import mongoose, { Document, Model, Schema } from "mongoose";

export interface IEquipamento extends Document {
    _id: string;
    modelo: string;
    marca: string;
    localizacao: string;
    status: string;
    numeroSerie: string;
}

const EquipamentoSchema: Schema<IEquipamento> = new Schema({
    modelo: { type: String, required: true },
    marca: { type: String, required: true },
    localizacao: { type: String, required: true },
    status: {type:String, enun: ["Ativo","Inativo"],  default: "Ativo"},
    numeroSerie: { type: String, required: true, unique: true }
});

//toMap // FromMap
const Equipamento: Model<IEquipamento> = mongoose.models.Equipamento || mongoose.model<IEquipamento>("Equipamento", EquipamentoSchema);

export default Equipamento;
