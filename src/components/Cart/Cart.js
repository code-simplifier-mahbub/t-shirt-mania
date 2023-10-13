import React from 'react';
import './cart.css'

const Cart = ({cart,handleToRemove}) => {
    
    return (
        <div>
            <h2>Order summary</h2>
            <p>Total quantity : {cart.length}</p>
           {
            cart.map(tshirt => 
            <p
            key={tshirt._id}
            >
                
                {tshirt.name}
                <button onClick={() => {handleToRemove(tshirt)}}>X</button>
                
            </p>
            
            )
            
           }
        </div>
    );
};

export default Cart;