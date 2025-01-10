const express = require('express');
const { createPost } = require("../controllers/post.controller")
const router = express.Router();

router.post("/posts", createPost)

module.exports = router;