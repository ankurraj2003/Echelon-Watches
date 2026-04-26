import multer from "multer";

// Use memory storage for serverless environments (Vercel)
// Files are stored as buffers in memory instead of writing to disk
const storage = multer.memoryStorage();

const upload = multer({ storage });

export default upload;
