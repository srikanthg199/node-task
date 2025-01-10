const express = require('express');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' })
const { createPost, getPosts } = require("../controllers/post.controller");
const { validateRequest } = require('../validations/validations');
const { createPostSchema, getPostsSchema } = require('../validations/post.validation');
const router = express.Router();

router.post("/posts", upload.single("image"), validateRequest(createPostSchema), createPost);
router.get("/posts", validateRequest(getPostsSchema), getPosts)


module.exports = router;