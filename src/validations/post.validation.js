const Joi = require("joi");

const createPostSchema = Joi.object({
    title: Joi.string().required().messages({
        "string.base": "title must be a string.",
        "string.uri": "title must be a valid URI.",
        "string.empty": "title is required.",
        "any.required": "title is required.",
    }),
    description: Joi.string().required().messages({
        "string.base": "description must be a string.",
        "string.empty": "description is required.",
        "any.required": "description is required.",
    }),
    tags: Joi.alternatives()
        .try(
            Joi.array().items(
                Joi.string().messages({
                    "string.base": "Each tag must be a string."
                })
            ).messages({
                "array.base": "tags must be an array."
            }),
            Joi.string().messages({
                "string.base": "tags must be a string."
            })
        )
        .optional()

});

const getPostsSchema = Joi.object({
    page: Joi.number().integer().min(1).optional(),
    limit: Joi.number().integer().min(1).optional(),
    keyword: Joi.string().allow("", null).optional(),
    tag: Joi.string().optional(),
    sortBy: Joi.string().optional(),
    sortOrder: Joi.string().optional().valid("asc", "desc"),
}).unknown(false)

module.exports = { createPostSchema, getPostsSchema };
