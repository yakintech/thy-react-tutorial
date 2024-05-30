import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { suppliersData } from '../data/suppliersData'

function SupplierDetail() {

    const { id } = useParams()
    const navigate = useNavigate()

    let data = suppliersData.find(q => q.id == id)

    return <>
        <button onClick={() => navigate(-1)}>Go BACK!</button>
        <h1>Id: {id}</h1>
        <h1>Company Name: {data.companyName}</h1>
        <h1>Contact Name: {data.contactName}</h1>
        <h1>Contact Title: {data.contactTitle}</h1>
    </>
}

export default SupplierDetail