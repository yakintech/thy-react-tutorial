import { createContext, useEffect, useState } from "react";



export const cartContext = createContext(null)


export const CartProvider = ({ children }) => {

    const [cart, setcart] = useState([])

    useEffect(() => {
      
        let cartData = localStorage.getItem("cart")

        if(cartData){
            setcart(JSON.parse(cartData))
        }

    }, [])
    

    //addToCart, removeFromCart ve empty fonksiyonları ile global statei değiştirecek fonksiyonları yazıyorum
    const addToCart = (item) => {

        let cartItem = cart.find(q => q.id == item.id)

        if (cartItem) {
            cartItem.quantity = cartItem.quantity + 1
            setcart([...cart])
            localStorage.setItem("cart", JSON.stringify(cart))
        }
        //sepette ürün yoksa yeni bir cart objesi oluşturuyorum
        else {
            let newCartItem = {
                id: item.id,
                name: item.name,
                unitPrice: item.unitPrice,
                quantity: 1
            }

            setcart([...cart, newCartItem])
            localStorage.setItem("cart", JSON.stringify([...cart, newCartItem]))
        }

    }

    const removeFromCart = (id) => {
        let filteredCart = cart.filter(item => item.id != id)
        setcart(filteredCart)
        localStorage.setItem("cart", JSON.stringify(filteredCart))
    }

    const empty = () => {
        setcart([])
        localStorage.setItem("cart", JSON.stringify([]))
    }

    //value içerisine diğer componentlerin erişebileceği değerleri yazıyorum
    return <cartContext.Provider value={{ cart, addToCart, removeFromCart, empty }}>
        {children}
    </cartContext.Provider>

}

