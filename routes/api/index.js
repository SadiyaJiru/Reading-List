const router = require("express").Router();
const bookRouter = require("./books")

//Created the router and the base is going to be books
//books is the sub directory 
router.use("/books", bookRouter);


module.exports = router;