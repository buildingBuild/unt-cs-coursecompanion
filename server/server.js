import { connectPg, connectChroma } from "./databaseConnect.js";
import express from 'express'
import OpenAI from "openai";
//const openai = new OpenAI();
const app = express();
const JSPORT = process.env.JSPORT
const CHROMA_KEY = process.env.CHROMA_API_KEY
const TENANT_KEY = process.env.TENANT_KEY
const PG_KEY = process.env.PG_CONNECTION_KEY












app.get('/', (req, res) => {




})

app.listen(JSPORT, connectPg)




