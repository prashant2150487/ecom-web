import { Schema, model, models } from "mongoose"

const ProductSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true }, // Marking description as required
    price: { type: Number, required: true },
});
export const Product = models.Product || model('Product', ProductSchema);