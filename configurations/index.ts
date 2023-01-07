// send enviorment to s3 bucket

// Set the region

import AWS from "aws-sdk";
import fs from "fs";

if (!process.env.BUCKET_NAME || !process.env.FILE_NAME) {
    process.exit();
}

fs.readFile(process.env.BUCKET_NAME, (err, data) => {
    if (err) {
        console.log("Error reading file:", err);
        return;
    }

    AWS.config.update({ region: "ap-northeast-2" });

    // Create an S3 client
    const s3 = new AWS.S3();

    // Set the parameters for the upload
    const params = {
        Bucket: process.env.BUCKET_NAME as string,
        Key: process.env.FILE_NAME as string,
        Body: data,
    };

    // Upload the file to the S3 bucket
    s3.upload(params, function (err, data) {
        if (err) {
            console.log("There was an error uploading the file:", err);
        } else {
            console.log("Successfully uploaded file.");
        }
    });
});
