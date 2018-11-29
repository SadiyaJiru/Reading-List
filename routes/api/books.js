const router = require("express").Router();
const booksController = require("../../controllers/booksControllers.js");

// Same route as saying "/api/books"
//when the root is hit it will go ahead and find all books using booksController
router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);

//Same as "/api/books/:id"
router.route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

module.exports = router;
