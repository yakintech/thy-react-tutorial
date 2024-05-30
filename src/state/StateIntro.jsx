import React from 'react'

function StateIntro() {

    let counter = 0

    const increase = () => {
        counter++
        document.getElementById("counter").innerHTML = counter
    }

    return <>

        <h1 id='counter'>Counter: {counter}</h1>
        <button onClick={increase}>Increase</button>
        {/* <button onClick={() => increase()}>Increase</button> */}
    </>
}

export default StateIntro