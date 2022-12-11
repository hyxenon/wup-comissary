import { createContext, useEffect, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("items")) || []
  );

  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(()=>{

    if (cartItems.length === 0) {
      setTotalPrice(0);
      return;
    }

    let total = 0;
    cartItems.forEach((item, index) => {
      total += cartItems[index].price * cartItems[index].quantity;
    });

    setTotalPrice(total);
  },[cartItems])


  const addToCart = (category, title, price, img) => {
    const sameItem = cartItems.some((item) => item.title === title);

    if (sameItem) {
      addQuantity(title)
      return;
    }

    setCartItems((oldCartItems) => [
      ...oldCartItems,
      { category: category, title: title, price: price, img: img, quantity: 1 },
    ]);
  };

  const deleteToCart = (title) => {
    setCartItems((oldCartItems) =>
      oldCartItems.filter((item) => item.title !== title)
    );
  };

  const addQuantity = (title) => {
    setCartItems((oldCartItems) =>
    oldCartItems.map((item) => {
      if (item.title === title) {
        return { ...item, quantity: item.quantity + 1 };
      } else {
        return { ...item };
      }
    })
  );
  }

  const deleteQuantity = (title,quantity) => {
    if(quantity === 1)return
    setCartItems((oldCartItems) =>
    oldCartItems.map((item) => {
      if (item.title === title) {
        return { ...item, quantity: item.quantity - 1 };
      } else {
        return { ...item };
      }
    })
  );
  }

  return (
    <CartContext.Provider value={{ cartItems, totalPrice, addToCart, deleteToCart, addQuantity, deleteQuantity }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
