import "dotenv/config";
import { ObjectId } from "mongodb";
import conectarDB from "../config/dbConfig.js";

const conexaoDB = await conectarDB(process.env.STR_CONEXAO_MONGODB);

export async function getTodosPost() {
    let db = conexaoDB.db("devback");
    let colecao = db.collection("posts");
    return colecao.find().toArray();
  }

 export async function criarPost(novoPost){
  let db = conexaoDB.db("devback");
  let colecao = db.collection("posts");
  return colecao.insertOne(novoPost);
 }
  
 export async function atualizarPost(id,novoPost){
  let db = conexaoDB.db("devback");
  let colecao = db.collection("posts");
  const objID = ObjectId.createFromHexString(id);
  return colecao.updateOne({_id:new ObjectId(objID)},{$set:novoPost});
 }
