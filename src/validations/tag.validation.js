const Joi = require("joi");

const createTagSchema = Joi.object({
    name: Joi.string().required().messages({
        "string.base": "name must be a string.",
        "string.empty": "name is required.",
        "any.required": "name is required.",
    }),
})

module.exports = { createTagSchema };