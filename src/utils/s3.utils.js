const fs = require('fs');
const AWS = require("aws-sdk");

const s3FileUpload = async (file) => {
    const s3 = new AWS.S3({
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        region: process.env.AWS_REGION,
    });

    const params = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: `uploads/${Date.now()}-${file.originalname}`,
        Body: fs.readFileSync(file.path),
        ContentType: file.mimetype,
    };

    const data = await s3.upload(params).promise();

    fs.unlinkSync(file.path);

    return data.Location;
}

module.exports = { s3FileUpload };