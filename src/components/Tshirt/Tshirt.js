import React from 'react';
import './Tshirt.css'

const Tshirt = ({tshirt, handleAddToCart}) => {
    
    const {_id, picture, name,price} = tshirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <div className="tshirt-info">
                <h2>{name}</h2>
                <p>price : ${price}</p>
                <button onClick={() => handleAddToCart(tshirt)}>Buy this</button>
            </div>
        </div>
    );
};

export default Tshirt;