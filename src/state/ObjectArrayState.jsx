import React, { useState } from 'react'
import { productsData } from '../data/productsData'

function ObjectArrayState() {

    const [products, setproducts] = useState(productsData)
    const [isSort, setisSort] = useState(false)


    const removeProduct = (id) => {
        let filteredProducts = products.filter(q => q.id != id)
        setproducts(filteredProducts)
    }

    let totalPrice = 0;

    products.forEach(item => {
        totalPrice = totalPrice + item.unitPrice
    })


    const sortByUnitPrice = () => {
        if(isSort == false){
            let sortedProducts = products.sort((a,b) => a.unitPrice - b.unitPrice)
            setproducts([...sortedProducts])
            setisSort(true)
        }
        else{
            let sortedProducts = products.sort((a,b) => b.unitPrice - a.unitPrice)
            setproducts([...sortedProducts])
            setisSort(false)
        }

    }

    return <>
        <h1>Products Length: {products.length}</h1>
        <h1>Total Price: {totalPrice.toFixed(2)}</h1>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th style={{cursor:'pointer'}} onClick={() => sortByUnitPrice()}>Unit Price</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map(item => <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.unitPrice}</td>
                        <td><button onClick={() => removeProduct(item.id)}>Delete</button></td>
                    </tr>)
                }
            </tbody>
        </table>
    </>
}

export default ObjectArrayState