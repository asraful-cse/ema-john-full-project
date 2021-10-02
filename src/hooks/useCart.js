import { useEffect, useState } from "react";
import { getStoredCart } from "../utilities/fakedb";

const useCart = (products) => {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        if (products.length) { 
            const savedCart = getStoredCart();      // fakedata theke eikhane call kora hoise
            const storedCart = [];
            for (const key in savedCart) {
                const addedProduct = products.find(product => product.key === key);
                if (addedProduct) {
                    // quantity customized  kore set kora holo
                    const quantity = savedCart[key];
                    addedProduct.quantity = quantity;
                    storedCart.push(addedProduct);

                }

            }
            setCart(storedCart);
        }
    }, [products])
    return [cart , setCart]
}

export default useCart;