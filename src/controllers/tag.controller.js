const Tag = require("../models/models.tag")
const createTag = async (req, res) => {
    try {
        const { name } = req.body;
        // Check if the tag already exists
        const isTagExist = await Tag.findOne({ name });
        if (isTagExist) {
            return res.status(400).json({ status: false, message: 'Tag already exists' });
        }
        // Create and save the new tag
        const newTag = new Tag({ name });
        await newTag.save();
        return res.status(201).json({ status: true, message: "Tag created successfully", data: newTag })
    } catch (error) {
        console.error(error);
        return res.status(400).json({ status: false, message: 'Something went wrong' });
    }
}

const getTags = async (req, res) => {
    try {
        const tags = await Tag.find({});
        return res.status(200).json({ status: true, data: tags, message: "Tags retrieved successfully", data: tags })
    } catch (error) {
        console.error(error);
        return res.status(400).json({ status: false, message: 'Something went wrong' });
    }
}

module.exports = { createTag, getTags }; 