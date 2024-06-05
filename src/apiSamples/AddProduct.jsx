import axios from 'axios'
import React, { useEffect, useState } from 'react'

function AddProduct() {

    const [name, setname] = useState("")
    const [unitPrice, setunitPrice] = useState(0)
    const [products, setproducts] = useState([])
    const [loading, setloading] = useState(true)


    useEffect(() => {

        loadProducts()

    }, [])



    const add = () => {

        let newProduct = {
            name, // name : name
            unitPrice // unitPrice : unitPrice
        }

        axios.post("https://northwind.vercel.app/api/products", newProduct)
            .then(res => {
                loadProducts()
            })
            .catch(err => {
                alert("Error!")
            })

    }

    const add2 = async () => {
        try {
            let newProduct = {
                name, // name : name
                unitPrice // unitPrice : unitPrice
            }

            let response = await axios.post("https://northwind.vercel.app/api/products", newProduct)
            if (response.status == 200) {
                loadProducts()
            }
        } catch (error) {
            console.log("Error", error)
        }
    }


    const loadProducts = () => {
        axios.get("https://northwind.vercel.app/api/products")
            .then(res => {
                setproducts(res.data) // response body
                setloading(false)
            })
    }


    const deleteProduct = (id) => {

        const confirm = window.confirm("Are u sure?")

        if (!confirm)
            return

        setloading(true)
        axios.delete(`https://northwind.vercel.app/api/products/${id}`)
            .then(res => {
                loadProducts()
                setloading(false)
            })
    }

    return <>
        {
            loading == true ? <h1>loading...</h1> : <div>
                <div>
                    <div>
                        <label htmlFor="">Name</label>
                        <input type='text' onChange={(e) => setname(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="">Unit Price</label>
                        <input type='text' onChange={(e) => setunitPrice(e.target.value)} />
                    </div>
                    <div>
                        <button onClick={add2}>Add</button>
                    </div>
                </div>


                <hr />

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
                                <td>{Number(item.unitPrice).toFixed(2)}</td>
                                <td><button onClick={() => deleteProduct(item.id)}>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        }

    </>
}

export default AddProduct