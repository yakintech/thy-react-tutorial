import { Button } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React, { useContext } from 'react'
import { queryClient } from '..'
import { useNavigate } from 'react-router-dom'
import { cartContext } from '../context/CartContext'

function ProductsGrid() {

    const navigate = useNavigate()

    //useContext ile global state üzerinden istediğim değeri alıyorum
    const {addToCart} = useContext(cartContext)

    const { data, isLoading } = useQuery({
        queryKey: ['products', 'all'],
        queryFn: () => axios.get('https://northwind.vercel.app/api/products').then((res) =>
            res.data,
        )
    })


    const deleteProduct = (id) => {

        let confirm = window.confirm("Are u sure?")

        if (!confirm)
            return
        //delete operation after loading the data
        axios.delete(`https://northwind.vercel.app/api/products/${id}`).then(() => {
            queryClient.invalidateQueries('products')
        })
    }


    const columns = [
        {
            field: "id", //datayla eşleşen prop
            headerName: "ID", // kolın başlığı
            width: 150
        },
        {
            field: "name",
            headerName: "Name",
            width: 250,
            renderCell: (item) => <span>{item.row.name.toUpperCase()}</span>

        },
        {
            field: "unitPrice",
            headerName: "Unit Price",
            width: 150
        },
        {
            field: "unitsInStock",
            headerName: "Units In Stock",
            width: 150
        },
        {
            field: "delete",
            headerName: "Delete",
            width: 150,
            renderCell: (item) => <Button onClick={() => deleteProduct(item.row.id)} variant='contained' color='error'>Delete</Button>
        },
        {
            field:"detail",
            headerName:"Detail",
            width:150,
            renderCell: (item) => <Button variant='contained' onClick={() => navigate("/products/" + item.row.id)}>Go Detail</Button>
        },
        {
            field:"addToCart",
            headerName:"Add To Cart",
            width:150,
            renderCell: (item) => <Button onClick={() => addToCart(item.row)} variant='contained' color="info">Add to cart</Button>
        }
    ]

    return <>
        <div style={{ height: 600, width: '100%' }}>
            {
                <DataGrid
                    rows={data ?? []}
                    columns={columns}
                    loading={isLoading}
                />
            }
        </div>

    </>
}

export default ProductsGrid