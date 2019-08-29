const router = require("express").Router();
const controller = require("../controllers/controller.js")


// Matches with "/api/create"
router.route("/api/create")
    .post(controller.create);

// Matches with "/api/user/:id"
router
    .route("/api/user/:id")
    .get(controller.findById)
    .put(controller.update)
    .delete(controller.delete);

module.exports = router;


