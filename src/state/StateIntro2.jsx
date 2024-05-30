import React, { useState } from 'react'

function StateIntro2() {

    //counter değişkenimin kendisi
    //setCounter değişkeni DEĞİŞTİRECEK TEK FONKSİYON
    const [counter, setCounter] = useState(0)

    console.log("Component rendered!")


    return <>
        <h1>Counter: {counter}</h1>
        <button onClick={() => setCounter(20)}>Increase</button>

    </>
}

export default StateIntro2
