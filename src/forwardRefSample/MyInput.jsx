import React, { forwardRef } from 'react'

const MyInput = forwardRef((props, ref) => {
    return <input type="text" ref={ref} {...props} />
})

export default MyInput