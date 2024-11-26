import {MongoClient} from 'mongodb'

export default async function conectarDB(strConexaoDB) {
    let mongoClient;
    try{
        mongoClient = new MongoClient(strConexaoDB);
        console.log("Conectando ao cluster do DB...");
        await mongoClient.connect();
        console.log("Conectado ao MongoDB Atlas com sucesso!");
        return mongoClient;
    }catch(erro){
        console.error('Falha na conexão com o banco!', erro);
        process.exit();
    }
    
}