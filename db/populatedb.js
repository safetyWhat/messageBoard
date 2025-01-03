require("dotenv").config();
const { Client } = require("pg");

const SQL =` 
    CREATE TABLE messages (
        id SERIAL PRIMARY KEY,
        text TEXT,
        user TEXT,
        added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

    INSERT INTO messages (text, user) 
    VALUES 
    ('Hi there!', 'Amanda'),
    ('Hello World!', 'Charles'),
    ('How are you?', 'Amanda'),
    ('I am good', 'Charles'),
    ('What are you doing?', 'Amanda'),
    ('I am working on my project', 'Charles');
`;

async function main() {
    console.log('seeding database');
    const client = new Client({
        connectionString: process.env.DATABASE_URL,
    });

    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log('database seeded');
}

main().catch(console.error);