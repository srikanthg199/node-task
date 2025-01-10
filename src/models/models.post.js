const mongoose = require("mongoose");
const { Schema } = mongoose;

const PostSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String },
    tags: [{ type: Schema.ObjectId, ref: 'Tag' }]
}, { timestamps: true });

module.exports = mongoose.model('Post', PostSchema);