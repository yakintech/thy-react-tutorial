import React, { useImperativeHandle, useRef } from 'react'


const MyInput2 = React.forwardRef((props, ref) => {

    const inputRef = useRef()


    useImperativeHandle(ref, () => ({
        inputFocus: () => {
            inputRef.current.focus()
        },
        clear: () => {
            inputRef.current.value = ''
        }
    }))



    return <input type="text" ref={inputRef} {...props} />
})

export default MyInput2