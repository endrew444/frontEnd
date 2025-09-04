//arrow function

import mongoose from "mongoose"

const connectMongo = async ()   => {
    mongoose.connect(process.env.DATABASE_URL)//ESTABELECE A CONEXÃO COM O BANCO
    .then(() => {
        console.log("Conectado ao MongoDB")
    });
}

export default connectMongo;
