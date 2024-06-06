import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ProductDetail() {

    const { id } = useParams()

    // const { data } = useQuery({
    //     queryKey: ["productDetail"],
    //     queryFn: () => axios.get('https://northwind.vercel.app/api/products/' + id).then((res) =>
    //         res.data,
    //     )
    // })

    const [data2, setdata2] = useState({})


    useEffect(() => {
        axios.get('https://northwind.vercel.app/api/products/' + id)
            .then(res => setdata2(res.data))
    }, [])




    return <>
        {
            data2 ? <>
                <h3>Name: {data2.name}</h3>
                <h3>Unit Price: {data2.unitPrice}</h3>
                <h3>Stock: {data2.unitsInStock}</h3>
                <h3>Quantity Per Unit: {data2.quantityPerUnit}</h3>
                <h3>Category Id: {data2.categoryId}</h3>
            </> : <></>
        }

    </>
}

export default ProductDetail