import React, { useContext } from 'react'
import { cartContext } from '../context/CartContext'

function Cart() {

    const { cart, removeFromCart, empty } = useContext(cartContext)


    let totalPrice = 0


    cart.forEach(element => {
        totalPrice = totalPrice + (element.quantity * element.unitPrice)
    });

    return <>
        <button onClick={empty}>Empty</button>
        <hr />
        <h1>Total: {totalPrice.toFixed(2)}</h1>
        <ul>
            {
                cart.map(item => {
                    return <li style={{ margin: 10 }} key={item.id}>{item.name} - {item.unitPrice.toFixed(2)} * {item.quantity}
                        = {(item.unitPrice * item.quantity).toFixed(2)}
                        <button style={{ marginLeft: 15 }} onClick={() => removeFromCart(item.id)}>Remove</button>
                    </li>
                })
            }
        </ul>
    </>
}

export default Cart