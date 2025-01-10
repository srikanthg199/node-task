require('dotenv').config();
const express = require("express");
const cors = require("cors")
const bodyParser = require('body-parser')
const connectDb = require("./config/config.db")
const tagRoutes = require("./routes/tag.routes");
const postRoutes = require("./routes/post.routes")
const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use("/api/v1", tagRoutes);
app.use("/api/v1", postRoutes)


connectDb()
app.listen(PORT, () => {
    console.log("Server running on port: ", PORT);
})
