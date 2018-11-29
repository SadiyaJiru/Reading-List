const router = require("express").Router();
const path = require("path");
const apiRoutes = require("./api");

//routes specificly just for the API, pass in apiRoutes from routes/api
router.use("/api", apiRoutes);

router.use(function(req, res){
    //send the react app if no api routes are hit
res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
