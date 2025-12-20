import { connectPg, connectChroma } from "./databaseConnect.js";
import express, { urlencoded } from 'express'
import OpenAI from "openai";
import ollama from 'ollama'
import cors from 'cors'

//const openai = new OpenAI();
const app = express();
const JSPORT = process.env.JSPORT
const CHROMA_KEY = process.env.CHROMA_API_KEY
const TENANT_KEY = process.env.TENANT_KEY
const PG_KEY = process.env.PG_CONNECTION_KEY


app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(cors())


app.post('/api/chat', async (req, res) => {

    try {
        console.log("awaiting a message.....")
        const { userQuestion } = req.body
        const response = await ollama.chat({
            model: 'Mistral',
            messages: [{ role: 'user', content: 'Reply with  sir' }],
        })
        console.log(response.message.content)
        res.status(200).json({ message: response.message.content })

    }
    catch (err) {
        res.status(500).json({ message: err.message })

    }
})



app.get('/', (req, res) => {




})

app.listen(JSPORT, () => console.log(`Running on ${JSPORT}`))

//app.lisen(JSPORT, connectionPG)


