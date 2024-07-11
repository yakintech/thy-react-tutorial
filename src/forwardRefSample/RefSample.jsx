import React, { useRef } from 'react'
import MyInput from './MyInput';
import MyInput2 from './MyInput2';
import Modal from './Modal';

function RefSample() {

    const h1Ref = useRef();
    const inputRef = useRef();
    const inputRef2 = useRef();
    const modalRef = useRef();

    const hello = () => {
        h1Ref.current.style.color = 'red'
        //document.getElementById('h1')
    }

    return <>
        <h1 ref={h1Ref}>Türkiye</h1>
        <button onClick={hello}>Hello</button>
        <MyInput ref={inputRef} />
        <hr />
        <button onClick={() => inputRef.current.focus()}>Focus Input</button>
        <hr />
        <MyInput2 ref={inputRef2} />
        <button onClick={() => inputRef2.current.inputFocus()}>Focus Input2</button>
        <button onClick={() => inputRef2.current.clear()}>Clear Input2</button>
        <hr />
        <Modal ref={modalRef} title="Mesaj" content="lorem ipsum" />
        <button onClick={() => modalRef.current.openModal()}>Open Modal</button>
        <button onClick={() => modalRef.current.closeModal()}>Close Modal</button>
        
    
    </>
}

export default RefSample