import { CloudClient } from "chromadb";
import { Client } from "pg";

export async function connectPg() {

    const client = new Client({
        connectionString: PG_KEY,
        ssl: { rejectUnauthorized: false },
    });

    await client.connect();
    const res = await client.query('SELECT NOW()');
    console.log(res.rows[0]);
    await client.end();

}

export async function connectChroma() {

    const client = new CloudClient({
        apiKey: `${CHROMA_KEY}`,
        tenant: `${TENANT_KEY}`,
        database: 'CourseCompanion'
    });

}


