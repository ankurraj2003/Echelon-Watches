import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/productModel.js";




// fucntion for adding product
const addProduct = async (req, res) => {
    try {
        const { name, description, price, category, subCategory, bestseller } = req.body;


        const image1 = req.files?.image1?.[0];
        const image2 = req.files?.image2?.[0];
        const image3 = req.files?.image3?.[0];
        const image4 = req.files?.image4?.[0];

        console.log(name, description, price, category, subCategory, bestseller);

        // Upload images to Cloudinary using buffer (for serverless/memory storage)
        const uploadImage = async (image) => {
            if (!image || !image.buffer) return null;
            try {
                const result = await new Promise((resolve, reject) => {
                    const stream = cloudinary.uploader.upload_stream(
                        { resource_type: 'image' },
                        (error, result) => {
                            if (error) reject(error);
                            else resolve(result);
                        }
                    );
                    stream.end(image.buffer);
                });
                return result.secure_url;
            } catch (error) {
                console.error("Cloudinary Upload Error:", error);
                return null;
            }
        };

        const image1Url = await uploadImage(image1);
        const image2Url = await uploadImage(image2);
        const image3Url = await uploadImage(image3);
        const image4Url = await uploadImage(image4);
        const imagesUrl = [image1Url, image2Url, image3Url, image4Url].filter(url => url !== null);

        const productData = {
            name, description, price: Number(price), category, subCategory, bestseller: bestseller === 'true' ? true : false, image: imagesUrl,
            date: Date.now()
        }
        console.log(productData);
        const product = new productModel(productData);
        await product.save();


        res.json({
            success: true,
            message: "Product added successfully!",

        });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}
// fucntion for listing product
const listProduct = async (req, res) => {
    try {
        const products = await productModel.find({});
        res.json({ success: true, products })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}// fucntion for removing product
const removeProduct = async (req, res) => {
    try {

        await productModel.findByIdAndDelete(req.body.id)
        res.json({ success: true, message: "Product removed" })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}// fucntion for single product info
const singleProduct = async (req, res) => {
    try {
        const { productId } = req.body
        const product = await productModel.findById(productId)
        res.json(
            { success: true, product }
        )
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

export { listProduct, addProduct, removeProduct, singleProduct }