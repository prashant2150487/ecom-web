import React from 'react'
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
export default function ProductForm({ _id, title: existingTitle, description: existingDescription, price: existingPrice, }) {

    const [title, setTitle] = useState(existingTitle || '');
    const [description, setDescription] = useState(existingDescription || '');
    const [price, setPrice] = useState(existingPrice || '');
    const [goToProducts, setGoToProducts] = useState(false);

    const router = useRouter();
    async function createProduct(ev) {
        ev.preventDefault();
        const data = {
            title, description, price,
        };
        if (_id) {
            //update
            await axios.put('/api/products', { ...data, _id });
        } else {
            //create
            await axios.post('/api/products', data);
        }
        setGoToProducts(true);
    }
    if (goToProducts) {
        router.push('/products');
    }
    return (
        <form onSubmit={createProduct}>
            <h1 className="font-bold">New Product</h1>
            <label className="font-semibold" >Product Name</label>
            <input name="title" type="text" placeholder="product name" value={title} onChange={(e) => setTitle(e.target.value)} />
            <label className="font-semibold">Description</label>
            <textarea name="description" placeholder="description" value={description} onChange={(e) => setDescription(e.target.value)} />
            <label className="font-semibold">Price (in usd)</label>
            <input name="price" type="number" placeholder="price" value={price} onChange={(e) => setPrice(e.target.value)} />
            <button className="btn-primary" type="submit">Save</button>
        </form>
    )
}

