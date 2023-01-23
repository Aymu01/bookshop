import React from 'react'
import { RiDeleteBin6Line } from 'react-icons/ri';
import './cart.scss'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { connect } from "react-redux";
import { toDecrease, toIncrease ,toDelete} from '../../actions/actions';

const Cart = (props) => {
  const cartData = props.cart;
  console.log(props);
  const price = cartData.reduce((a,b) => a+b.totalPrice , 0);
  const cargo = cartData.reduce((a,b) => a+b.cargo , 0);
  return (
    <>
      {
        cartData.length === 0
          ?
          <div className='empty'>
            <div className="cartIcon">
              <AiOutlineShoppingCart className='bag' />
            </div>
            <p>Sepetinde ürün bulunmamaktadır.</p>
          </div>
          :
          <div className='all'>
            <div className="cartDiv">
              <div className="cartList">
                {
                  cartData.map(cart => (
                    <div className="cart" key={cart.id}>
                      <div className="bookInfo">
                        <div className="bookImg">
                          <img src={cart.image} alt="" />
                        </div>
                        <div className="bookTitle">
                          <p>{cart.title}</p>
                          <p>{cart.author}</p>
                        </div>
                      </div>
                      <div className="number">
                        <button onClick={() => props.toDecrease(cart.id)}>-</button>
                        <div >{cart.num}</div>
                        <button className='plus' onClick={() => props.toIncrease(cart.id)}>+</button>
                      </div>
                      <div className="allprice">
                        <p>{cart.totalPrice} TL</p>
                      </div>
                      <div className="delete">
                        <RiDeleteBin6Line onClick={() => props.toDelete(cart.id)}/>
                      </div>

                    </div>
                  ))
                }
              </div>
              <div className="priceCart">
                <h3>Sipariş özeti</h3>
                <div className="bottom">
                  <div>
                    <p className='title'>Ürünün toplamı</p>
                    <p className='price'>{price.toFixed(2)} TL</p>
                  </div>
                  <div>
                    <p className='title'>Kargo toplam</p>
                    <p className='price'>{cargo}TL</p>
                  </div>
                </div>
                <div className="result">
                  <div className="left">Toplam:</div>
                  <div className="rightPrice">{(price + cargo).toFixed(2)} TL</div>
                </div>
              </div>
            </div>
            <button className='cartOk'>Sepeti onayla</button>
          </div>

      }
    </>

  )
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps,{toIncrease,toDecrease,toDelete})(Cart);


