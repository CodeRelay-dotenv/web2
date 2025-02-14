import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { NextResponse } from "next/server";

// Initialize S3 Client
const s3Client = new S3Client({
    region: process.env.AWS_REGION || "us-east-1",
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
});

export async function POST(req) {
    try {
        // Parse the request body as JSON
        const body = await req.json();

        // Extract the base64 image and tags from the request body
        const { image, tags } = body;

        if (!image) {
            return NextResponse.json({ message: "No image provided." }, { status: 400 });
        }

        if (!tags) {
            return NextResponse.json({ message: "Tags are required." }, { status: 400 });
        }

        // Convert base64 image to a Buffer
        const base64Data = image.replace(/^data:image\/\w+;base64,/, ""); // Remove the data URL prefix
        const buffer = Buffer.from(base64Data, "base64");

        // Generate a unique file name
        const fileName = `canvas-image-${Date.now()}.png`;

        // Upload the image to S3
        const params = {
            Bucket: process.env.S3_BUCKET_NAME,
            Key: fileName,
            Body: buffer,
            ContentType: "image/png", // Set the content type
        };

        await s3Client.send(new PutObjectCommand(params));

        // Construct the S3 file URL
        const s3Location = `https://${process.env.S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${fileName}`;

        // Return the success response
        return NextResponse.json({ message: "File uploaded successfully.", fileUrl: s3Location }, { status: 200 });
    } catch (err) {
        console.error("Error uploading image:", err);
        return NextResponse.json({ message: "Upload failed.", error: err.message }, { status: 500 });
    }
}