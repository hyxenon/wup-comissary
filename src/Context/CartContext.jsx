import { createContext, useEffect, useState } from "react";


const CartContext = createContext()


export function CartProvider({children}){

    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("items")) || [])

    

    useEffect(()=>{
        localStorage.setItem("items",JSON.stringify(cartItems))
    },[cartItems])


    const addToCart = (category, title, price, img) => {

        const sameItem = cartItems.some((item)=> item.title === title)
        
        if(sameItem){
          setCartItems((oldCartItems) => oldCartItems.map((item) => {
            if(item.title === title){
                return {...item, quantity: item.quantity + 1}
            }else{
                return {...item}
            }
          }))
        return
        }

        setCartItems((oldCartItems)=>[...oldCartItems,{category: category, title: title, price: price, img: img ,quantity: 1}])
    }

    const deleteToCart = (title) => {
        setCartItems((oldCartItems)=> oldCartItems.filter((item) => item.title !== title))
    }

    return( 
    <CartContext.Provider value={{cartItems,addToCart,deleteToCart}}>
        {children}
    </CartContext.Provider>)
}

export default CartContext

