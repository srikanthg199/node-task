const Post = require("../models/models.post")
const Tag = require("../models/models.tag");
const mongoose = require("mongoose");
const { s3FileUpload } = require("../utils/s3.utils");

const createPost = async (req, res) => {
    try {
        let { title, description, tags } = req.body;

        let tagsArray = [];
        if (tags) {
            if (typeof tags === 'string') {
                tags = JSON.parse(tags); // Parse the string into an array
            }
            tagsArray = tags.map(tag => new mongoose.Types.ObjectId(tag));
            const existingTags = await Tag.find({ _id: { $in: tagsArray } });
            if (existingTags.length < tags.length) {
                return res.status(400).json({ status: false, message: 'Invalid tag(s)' });
            }
        }

        let image = ""
        if (req.file) {
            const s3Data = await s3FileUpload(req.file);
            image = s3Data
        }
        const newPost = new Post({ title, description, image, tags: tagsArray });
        await newPost.save();
        res.status(201).json({ status: true, message: "Post created successfully", data: newPost });
    } catch (error) {
        console.error(error);
        return res.status(400).json({ status: false, message: 'Something went wrong' });
    }
}

const getPosts = async (req, res) => {
    try {
        let { page, limit, keyword, tag, sortBy, sortOrder } = req.query;
        page = parseInt(page, 10) || 1;
        limit = parseInt(limit, 10) || 10;
        const skip = (page - 1) * limit;
        sortBy = sortBy || "createdAt";
        sortOrder = sortOrder || "desc";
        let query = {};

        if (keyword) {
            query.$or = [
                { title: { $regex: keyword, $options: "i" } },
                { description: { $regex: keyword, $options: "i" } }
            ]
        }

        if (tag) {
            const isTagExist = await Tag.findOne({ name: tag })
            if (isTagExist) query.tags = isTagExist._id
        }

        const posts = await Post.find(query)
            .sort([[sortBy, sortOrder]])
            .skip(skip)
            .limit(limit)
            .populate("tags")

        res.status(200).json({ status: true, message: "Post created successfully", data: posts });
    } catch (error) {
        console.error(error);
        return res.status(400).json({ status: false, message: 'Something went wrong' });
    }
};

module.exports = { createPost, getPosts };
