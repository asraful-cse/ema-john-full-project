import React from 'react';
import './Product.css';
// font awesome adde import file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Rating from 'react-rating';
const Product = (props) => {
    // console.log(props);
    const { img, name, seller, price, stock, star } = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h2 className='product-name'>Name: {name}</h2>

                <small>by : {seller}</small>
                <h3>Price : {price}</h3>
                <p><small>only {stock} left in stock - order soon</small></p>
                <Rating
                    initialRating = {star}
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color"
                    readonly> 
                    </Rating>
                {/* <Rating
                    initialRating={2.5}
                    readonly
                /> */}
                <br />
                <button
                    onClick={() => props.handleAddToCart(props.product)}
                    className="btn-regular">
                    <FontAwesomeIcon style={{ color: 'green', marginRight: '5px' }} icon={faShoppingCart} />
                    ad to cart
                </button>
            </div>

        </div>
    );
};

export default Product;