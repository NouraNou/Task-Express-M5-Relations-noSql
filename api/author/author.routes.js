const express = require("express");
const router = express.Router();
const {
  postsCreate,
  createAuthor,
  getAuthors,
} = require("./author.controllers");

router.post("/", createAuthor);

router.get("/", getAuthors);
router.post("/:authorId", postsCreate);

module.exports = router;
