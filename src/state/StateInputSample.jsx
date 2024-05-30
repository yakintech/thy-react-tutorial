import React, { useState } from 'react'

function StateInputSample() {

    const [name, setname] = useState("")
    const [surname, setsurname] = useState("")
    const [users, setusers] = useState([])

    console.log("Component rendered!")


    const addUser = () => {
        let newUser = {
            name, //name:name
            surname //surname:surname
        }

        setusers([...users, newUser])

        setname("")
        setsurname("")
    }

    return <>
        <div>
            <label htmlFor="">Name</label>
            <input type='text' onChange={(e) => setname(e.target.value)} value={name} />
        </div>
        <div>
            <label htmlFor="">Surname</label>
            <input type='text' onChange={(e) => setsurname(e.target.value)} value={surname} />
        </div>
        <div>
            <button onClick={addUser}>Add</button>
        </div>

        <hr />
        <ul>
            {
                users.map(item => <li>{item.name} {item.surname}</li>)
            }
        </ul>
    </>
}

export default StateInputSample