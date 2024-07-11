
import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react'



const Modal = forwardRef((props, ref) => {
    const modalRef = useRef()
    const [open, setOpen] = useState(false)

    useImperativeHandle(ref, () => ({
        openModal: () => {
            setOpen(true)
        },
        closeModal: () => {
            setOpen(false)
        }
    }))

    const close = () => {
        setOpen(false)
    }

    return open ? <div className="modal" ref={modalRef}>
        <div className="modal-content">
            <h2>{props.title}</h2>
            <p>{props.content}</p>
            <button onClick={close}>Close</button>
        </div>
    </div> : null
})

export default Modal