import React from 'react';

const ReviewItem = (props) => {
    const { name, price, quantity, key} = props.product;
    const {handleRemove} = props;
    return (
        <div className="product">
        <div>
            <h2 className='product-name'>Name: {name}</h2>
            <h3>Price : {price}</h3>
            <h5>quantity : {quantity}</h5>
            <br />
            <button onClick={() => handleRemove(key)}
                className="btn-regular">Remove</button>
        </div>

    </div>
    );
};

export default ReviewItem;