import React, { useEffect, useState } from 'react'

function Intro() {

    const [number, setnumber] = useState(0)



    useEffect(() => {
        var randomNumber = Math.floor(Math.random() * 1000)
        setnumber(randomNumber)
    }, [])

    return <>
        Random Number: {number}
    </>
}

export default Intro