const express = require('express');
const { createTag, getTags } = require("../controllers/tag.controller");
const { validateRequest } = require('../validations/validations');
const { createTagSchema } = require('../validations/tag.validation');

const router = express.Router();

router.post("/tags", validateRequest(createTagSchema), createTag)
router.get("/tags", getTags)

module.exports = router;