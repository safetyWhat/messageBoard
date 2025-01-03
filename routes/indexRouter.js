const { Router } = require("express");
const indexRouter = Router();
const indexController = require('../controllers/indexController');

indexRouter.get("/", indexController.getMessages);
indexRouter.get('/new', indexController.newMessageGet);
indexRouter.post('/new', indexController.newMessagePost);
indexRouter.get('/open/:id', indexController.openMessage);

module.exports = indexRouter;