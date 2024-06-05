import { useMutation, useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React, { useState } from 'react'
import { queryClient } from '../index'

function SuppliersTable() {

    const [companyName, setcompanyName] = useState("")
    const [contactName, setcontactName] = useState("")


    const { data, isLoading } = useQuery({
        queryKey: ['suppliers', 'all'],
        queryFn: () => axios.get('https://northwind.vercel.app/api/suppliers').then((res) =>
            res.data,
        ),
        // refetchInterval: 1000
        staleTime: 100000

    })

    const clearCache = () => {
        queryClient.invalidateQueries('suppliers')
    }

    //mutation 
    const mutation = useMutation({
        mutationFn: (newSupplier) => axios.post('https://northwind.vercel.app/api/suppliers', newSupplier).then((res) =>
            res.data,
        ),
        onSuccess: () => {
            //
            queryClient.invalidateQueries('suppliers')
        },
        onError: (error) => {
            console.log("Error", error)
        }
    })

    const add = () => {
        mutation.mutate({ companyName, contactName })
    }


    return <>
        <h1>Add Supplier</h1>
        <div>
            <div>
                <label htmlFor="">Company Name</label>
                <input type="text" value={companyName} onChange={(e) => setcompanyName(e.target.value)} />
            </div>
            <div>
                <label htmlFor="">Contact Name</label>
                <input type="text" value={contactName} onChange={(e) => setcontactName(e.target.value)} />
            </div>
            <div>
                <button onClick={add}>Add Supplier</button>
            </div>
        </div>


        <button onClick={clearCache}>Clear Cache</button>
        {
            isLoading ? <h1>loading...</h1> : <ul>
                {
                    data && data.map(item => <li id={item.id}>{item.companyName}</li>)
                }
            </ul>
        }

    </>
}

export default SuppliersTable