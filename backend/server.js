import express from "express";
import cors from 'cors';
import 'dotenv/config';
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

// app config
const app = express()
const port = process.env.PORT || 5000
connectDB().catch(err => console.error("MongoDB Connection Error:", err));
connectCloudinary().catch(err => console.error("Cloudinary Connection Error:", err));

//middlewares
app.use(express.json())
app.use(cors())

//API endpoints
app.use('/api/user', userRouter);
app.use('/api/product', productRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);




app.get('/', (req, res) => {
    res.send('API Working');
})

// Global error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ success: false, message: err.message, stack: err.stack });
});

app.listen(port, () => console.log('Server started on port: ' + port))   