require("dotenv").config();
const { Client } = require("pg");

const SQL =`
    DROP TABLE IF EXISTS messages;
    CREATE TABLE messages (
        id SERIAL PRIMARY KEY,
        text TEXT,
        "user" TEXT,
        added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

    INSERT INTO messages (text, "user") 
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
        connectionString: process.env.RAILWAY_URL,
    });

    try {
        await client.connect();
        await client.query(SQL);
        console.log('database seeded');
    } catch (err) {
        console.error('Error seeding database:', err);
    } finally {
        await client.end();
    }
}

main().catch(console.error);