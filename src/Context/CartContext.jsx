import React, { createContext, useContext, useState } from 'react'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)





export const CartContextProvider = ({children}) => {
   
    const [cart, setCart] = useState([])
    const emptyCart = () => setCart([])


    const getTotal = () => {
      let total = 0
      cart.map((item) => {
        const productData = item.precio * item.cantidad
        total += productData;
      });

      return total;
    };




    const addToCart = (newProduct) => {
      if (!isInCart(newProduct.id)) {
        setCart([...cart, newProduct])
      } else {
        const newCart = cart.map((item) => {
          if (item.id === newProduct.id) {
            return { ...item, cantidad: item.cantidad + newProduct.cantidad}
          } else return item
        })
        
        setCart(newCart)
      }
    }

    const removeItem = (id) => {
      setCart(cart.filter(item => item.id !== id))
    }

    const isInCart = (id) => {
      return cart.some((item) => item.id === id)
    }


    const notify = () => toast.success('¡Excelente! Ya agregamos tu producto al carrito.', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    
    


  return (
    <CartContext.Provider value={{
        cart,
        addToCart,
        removeItem,
        emptyCart,
        notify,
        getTotal,
        
        

    }}>
        {children}
    </CartContext.Provider>
  )
}

export default CartContext