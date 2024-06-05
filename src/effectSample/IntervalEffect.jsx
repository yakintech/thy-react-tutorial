import React, { useEffect } from 'react'

function IntervalEffect() {


    useEffect(() => {

        let interval = setInterval(() => {
            console.log("Interval...")
        }, 1000);

        return () => {
            clearInterval(interval)
        }

    }, [])



    return (
        <div>IntervalEffect</div>
    )
}

export default IntervalEffect