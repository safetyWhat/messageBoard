const { Router } = require("express");
const indexRouter = Router();
const indexController = require('../controllers/indexController');

const newDate = () => {
    const date = new Date;
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return `${month}/${day}/${year}`;
} 

indexRouter.get("/", indexController.getMessages);
indexRouter.get('/new', indexController.newMessageGet);
indexRouter.post('/new', indexController.newMessagePost);
indexRouter.get('/open/:id', indexController.openMessage);

module.exports = indexRouter;