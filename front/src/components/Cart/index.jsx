import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from '../CartItem';
import s from './index.module.css'
import { clearCartAction } from '../../store/reducer/cartReducer';
import { sendOrder } from '../../request/products_req';


export default function Cart() {

  const cart_state = useSelector(state => state.cart);

  const dispatch = useDispatch();

  const total = cart_state.reduce((acc,  {price, discont_price, count}) => {
    const totalPrice = discont_price ? discont_price : price    
    return acc + totalPrice * count} , 0)


    const [phoneNumber, setPhoneNumber] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      
      // alert(`Заказ размещен с номером телефона: ${phoneNumber}`);
      sendOrder()
      e.target.reset()
  };


  return (

    <div className={s.cart_cont}>
    <h1 className={s.title_cart}>Shopping Basket</h1>
    
    <div>
      <div className={s.cart_cont}>       
        {cart_state.length > 0
          ? cart_state.map((el) => <CartItem key={el.id} {...el} />)
          : <p className={s.empty}>Your cart is empty.</p>}
   
     
       {cart_state.length > 0 && (
        <form onSubmit={handleSubmit} className={s.order}>
          <h2>Order details</h2>
          <p>Total {total}$</p>
          <div className={s.pfon_ord}>
            <input
              type="number"
              placeholder="Phone number"
              name="phone"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
          />
            <button type="submit">Order</button>
          </div>
        </form>                
          )}
        </div>
      </div>
      
         {cart_state.length > 0 && (
        <div className={s.clear_btn} onClick={() => dispatch(clearCartAction())}>
          Clear cart
        </div>
      )}
      
    </div>




    // <div>
      
    //   <div>
    //     {
    //         cart_state.map(el => <CartItem key={el.id} {...el} />)
    //     }


        

    //     </div>
        
          

    //       <form onSubmit={handleSubmit} className={s.order}>
    //         <p>Order details</p>
    //         <p>Total: {total}$</p>
    //         <input
    //           type="number"
    //           placeholder="Phone number"
    //           name="phone"
    //           value={phoneNumber}
    //           onChange={(e) => setPhoneNumber(e.target.value)}
    //     />
    //         <button type="submit">Order</button>
    //       </form>


    //       {cart_state.length > 0 && (
    //     <div 
    //       className={s.clear_btn} 
    //       onClick={() => dispatch(clearCartAction())}
    //       >
    //       Clear cart
    //     </div>
    //   )}

    // </div>
  )
}