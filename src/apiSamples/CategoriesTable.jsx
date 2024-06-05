import axios from 'axios'
import React, { useEffect, useState } from 'react'

function CategoriesTable() {

    const [categories, setcategories] = useState([])


    useEffect(() => {

        const controller = new AbortController();

        axios.get("https://northwind.vercel.app/api/categories", {
            signal: controller.signal
        })
            .then(res => {
                console.log("DATA", res.data)
                setcategories(res.data)
            })

            return () => {
                console.log("Cancel!")
                controller.abort()
            }

    }, [])


    return <>
        <ul>
            {
                categories.map(item => <li key={item.id}>{item.name}</li>)
            }
        </ul>
    </>
}

export default CategoriesTable