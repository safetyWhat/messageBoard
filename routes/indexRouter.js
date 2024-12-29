const { Router } = require("express");
const indexRouter = Router();

const newDate = () => {
    const date = new Date;
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return `${month}/${day}/${year}`;
}
const messages = [
  {
    text: "Hi there!",
    user: "Amanda",
    added: newDate()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: newDate()
  }
];

const links = [
  { href: "/", text: "Home" },
  { href: "new", text: "New Message" }
];

  

indexRouter.get("/", (req, res) => res.render('../views/index', { messages: messages, links:links }));
indexRouter.get('/new', (req, res) => res.render('../views/newMessage', { links:links }));
indexRouter.post('/new', (req, res) => {
  messages.push({ text: req.body.message, user: req.body.name, added: newDate() });
  res.redirect('/');
});
indexRouter.get('/open/:id', (req, res) => {
  const id = parseInt(req.params.id, 7);
  const message = messages[id];

  if (!message) {
    return response.status(404).send('Message not found');
  }

  res.render('../views/openMessage', { message } );
})

module.exports = indexRouter;