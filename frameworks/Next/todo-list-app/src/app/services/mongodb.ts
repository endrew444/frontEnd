// escrevendo o mongoDB  de forma segura e reutilizavel (aramzenamento de cache)

const MongoUri = process.env.DATABASE_URL;

//verificar se existe um end URL
if(!MongoUri) { //VERIFICANDO A NULLIDADE DA VARIAVEL
    throw new Error("Defina o DATABASE_URL no .env.local");

}