const mongoose = require('mongoose')
const connectDb = async () => {
    try {
        const MONGO_URI = process.env.MONGO_URI;
        await mongoose.connect(MONGO_URI)
        console.log("Connected to mongoDB");
    } catch (error) {
        console.error('DB connection error:', error);
        process.exit(1);
    }
}

module.exports = connectDb;