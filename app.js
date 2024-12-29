const express = require('express');
const app = express();
const indexRouter = require('./routes/indexRouter')
const path = require("node:path");
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Simple message board app - listening on port ${PORT}!`);
});