import React, { useState } from 'react'

function StateIntro3() {

    const [numbers, setnumbers] = useState([10, 15, 22])

    const empty = () => {
        setnumbers([])
    }

    const addRandomNumber = () => {

        var randomNumber = Math.floor(Math.random() * 100)
        // numbers.push(randomNumber)


        setnumbers([...numbers, randomNumber])
        console.log(numbers)
    }


    return <>
        <button onClick={addRandomNumber}>Add Random Number</button>
        <hr />
        <h1>Length: {numbers.length}</h1>
        <button onClick={empty}>Empty</button>
        <ul>
            {
                numbers.map(item => <li>{item}</li>)
            }
        </ul>
    </>
}

export default StateIntro3


