import React from 'react'
import './PlaceOrder.css'
import { useContext } from 'react'
import { StoreContext } from '../../Context/StoreContext'

const PlaceOrder = () => {

  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <form className='place-order'>
        <div className='place-order-left'>
            <p className="title">Delivery Information</p>
            <div className="multi-fields">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>
            <input type="email" placeholder="Email Address" />
            <input type="text" placeholder="Street" />
            <div className="multi-fields">
              <input type="text" placeholder="City" />
              <input type="text" placeholder="State" />
            </div>
            <div className="multi-fields">
              <input type="text" placeholder="Zip Code" />
              <input type="text" placeholder="Country" />
            </div>
            <input type="text" placeholder="Phone" />
        </div>
        <div className='place-order-right'>
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
          <button>PROCEED TO PAYMENT</button>
        </div>
        </div>
    </form>
  )
}

export default PlaceOrder