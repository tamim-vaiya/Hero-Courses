import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    const total = cart.reduce((total , product) => total + parseInt(product.price), 0);
    return (
        <div>
            <h1 className='text-center' style={{color:'#5146ef'}}>Hero Courses</h1>
            <div className="cartInfo">
                <h4>Total Course : {cart.length} </h4>
                <h4> Total Price : $ {total} </h4>   
            </div>
            <div className="text-center btn-content" >
                <button className='btn btn-primary main_btn'>Review</button>
            </div>
            
            
        </div>
    );
};

export default Cart;