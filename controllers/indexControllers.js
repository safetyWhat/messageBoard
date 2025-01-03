const db = require('../db/queries');

const links = [
    { href: "/", text: "Home" },
    { href: "new", text: "New Message" }
];

async function getMessages(req, res) {
    const messages = await db.getAllMessages();
    res.render('../views/index', { messages: messages, links: links });
};

async function newMessageGet(req, res) {
    res.render('../views/newMessage', { links: links });
};

async function newMessagePost(req, res) {
    await db.addMessage(req.body.message, req.body.name);
    res.redirect('/');
};

async function openMessage(req, res) {
    const id = parseInt(req.params.id, 10);
    const messages = await db.getAllMessages();
    const message = messages[id];

    if (!message) {
        return res.status(404).send('Message not found');
    }

    res.render('../views/openMessage', { message });
};

module.exports = {
    getMessages,
    newMessageGet,
    newMessagePost,
    openMessage
};