import React from 'react';
import './Cart.css'

const Cart = ({cart,handleToRemove}) => {

    let message;

    if(cart.length === 0){
        message = <p>please buy at least one product</p>
    }
    else if(cart.length ===1 ){
        message = <p>please buy more product</p>
    }
    else{
        message = <p>thank you for buy more  product</p>
    }

    
    
    return (
        <div>
            <h2 className={cart.length === 2 ? `yellow` : 'purple'}>Order summary</h2>
            <p className={`bold ${cart.length === 2 ? 'green' : 'orange'}`}>Total quantity : {cart.length}</p>
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
           {
            message
           }
           {
            message = cart.length === 5 ? <p>Now you are our member</p> : <p>keep going to get membership</p>
           }
           {
            message = cart.length ===4 && <p> you are getting our membership as soon</p>
           }
           {
            message = cart.length ===5 || <p> you are not a star</p>
           }
        </div>
    );
};

export default Cart;