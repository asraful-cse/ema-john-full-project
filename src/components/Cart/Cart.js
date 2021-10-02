import React from 'react';
import './Cart.css';
const Cart = (props) => {
    // console.log(props.cart.length);
    const { cart } = props;
    // const total = cart.reduce((previous, product) => previous + product.price , 0); // 0 inisial value ditei hobe
//   console.log(cart);
let totalQuantity = 0;
    let total = 0;
    for(const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }
    const shipping = total > 0 ? 15 : 0;    // total ta jodi 0 cheye besi hoi tahole 15 vat + hobe, nahoi 0 thakbe.
    const text = (total + shipping) * 0.10;   // const text = (total + shipping) / 10;   >>> 10% vat
    const grandTotal = total + shipping + text;

    return (
        <div className="cart-size">
            <h1>Order Summary </h1>
            <strong>Items Order: {totalQuantity}</strong> 
            <br />
            <br />
            Total Price: $ {total.toFixed(2)}
            <p>Shipping : $  {shipping}</p>  
            <p>Text : $ {text.toFixed(2)}</p>
            <h4>Grand Total : $ {grandTotal.toFixed(2)}</h4>
            <h3>{props.children}</h3>
        </div>
    );
};

export default Cart;