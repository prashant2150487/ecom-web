import Layout from "@/components/Layout";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Products() {
    const [product, setProduct] = useState();

    useEffect(() => {
        axios.get('/api/products').then((response) => {
            console.log(response.data);
            setProduct(response.data);
        })
    }, [])
    return (
        <Layout>
            <Link href={"/products/new"} className="btn-primary">
                Add new product
            </Link>
            <table>
                <thead>
                    <tr>
                        <td>Product Name</td>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        </Layout>
    )
}