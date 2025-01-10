require('dotenv').config();
const express = require("express");
const connectDb = require("./config/config.db")
const cors = require("cors")
const tagRoutes = require("./routes/tag.routes");
const postRoutes = require("./routes/post.routes")
const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors())
app.use(express.json())

app.use("/api/v1", tagRoutes);
app.use("/api/v1", postRoutes)


connectDb()
app.listen(PORT, () => {
    console.log("Server running on port: ", PORT);
})
