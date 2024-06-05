import axios from 'axios'
import React, { useEffect, useState } from 'react'

function ProductsTable() {

    const [products, setproducts] = useState([])


    useEffect(() => {

        axios.get("https://northwind.vercel.app/api/products")
            .then(res => {
                console.log("Response", res)
                setproducts(res.data) // response body
            })

    }, [])


    return <>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Unit Price</th>
                </tr>
            </thead>
            <tbody>
            {
                products.map(item => <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.unitPrice}</td>
                </tr>)
            }
            </tbody>
        </table>
    </>
}

export default ProductsTable