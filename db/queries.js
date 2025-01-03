require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

async function getAllMessages() {
    const result = await pool.query('SELECT * FROM messages');
    return result.rows;
};

async function addMessage(message, user) {
    const result = await pool.query('INSERT INTO messages (text, user) VALUES ($1, $2)', [message, user]);
    return result;
};

module.exports = {
    getAllMessages,
    addMessage
};