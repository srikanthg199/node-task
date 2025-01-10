const mongoose = require("mongoose");
const { Schema } = mongoose;

const TagSchema = new Schema({
    name: { type: String, require: true, }
}, { timestamps: true });

module.exports = mongoose.model('Tag', TagSchema);
