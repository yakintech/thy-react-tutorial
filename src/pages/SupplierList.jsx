import React, { useState } from 'react'
import { suppliersData } from '../data/suppliersData'
import { Link, useNavigate } from 'react-router-dom'

function SupplierList() {

    const [suppliers, setsuppliers] = useState(suppliersData)

    const navigate = useNavigate()


    const goToDetail = (id) => {
        navigate(`/suppliers/${id}`)
        // navigate("/suppliers/" + id)

    }

    return <>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Company Name</th>
                    <th>Contact Name</th>
                    <th>Detail</th>
                </tr>
            </thead>
            <tbody>
                {
                    suppliers.map(item => {
                        return <tr>
                            <td><Link to={'/suppliers/' + item.id}>{item.id}</Link></td>
                            <td>{item.companyName}</td>
                            <td>{item.contactTitle}</td>
                            <td><button onClick={() => goToDetail(item.id)}>Go to detail</button></td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </>
}

export default SupplierList