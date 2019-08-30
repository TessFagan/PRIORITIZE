const router = require("express").Router();
const controller = require("../controllers/controller.js")


// Matches with "/api/create"
router.route("/create")
    .post(controller.createUser);


module.exports = router;


