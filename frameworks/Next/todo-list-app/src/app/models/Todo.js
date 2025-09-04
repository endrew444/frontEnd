import mongoose from 'mongoose';

//CONSTRUCTOR DE um obj da coleção MongoDB
const TodoSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: [true, 'O título é obrigatório'],//adc msgn de erro
        trim: true,//remove espaços em branco
        maxlength: [100, "max 100 char"]//mnsgn de erro para limite de caracteres
    },
    concluida: {
        type: Boolean,
        default: false
    },
    criadaEM: {
        type: Date,
        default: Date.now//registra a data atual
    }
});

export default mongoose.models.Todo || mongoose.model('Todo', TodoSchema);//se já existir o modelo, usa ele, c ñ cria um novo