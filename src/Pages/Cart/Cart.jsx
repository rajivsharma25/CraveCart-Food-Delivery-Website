import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../Context/StoreContext';
import { RiDeleteBin5Fill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';

const Cart = () => {

  const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <div className='cart'>
      <div className='cart-items'>
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {
          food_list.map((item, index) => {
            if (cartItems[item._id]>0) {
              return(
                <div>
                    <div key={index} className='cart-items-title cart-items-item'>
                        <img src={item.image} alt="" />
                        <p className='cart-item-name'>{item.name}</p>
                        <p>₹{item.price}</p>
                        <p>{cartItems[item._id]}</p>
                        <p>₹{item.price * cartItems[item._id]}</p>
                        <div onClick={() => removeFromCart(item._id)} className="delete-icon">
                          <RiDeleteBin5Fill className='del-icon' />
                        </div>
                    </div>
                    <hr />
                </div>
              )
            }
          })
        }
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>₹{getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delivery Fee <span className='free'>(free for orders over ₹200)</span></p>
                <p>₹{getTotalCartAmount()<= 400? 10 : 0}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Total</p>
                <p>₹{getTotalCartAmount() + (getTotalCartAmount() <= 400 ? 10 : 0)}</p>
              </div>
          </div>
          <button onClick={() => navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have a promo code, Enter it here.</p>
            <div className='cart-promocode-input'>
              <input type="text" placeholder="Promo Code" />
              <button>Submit</button>
            </div> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart