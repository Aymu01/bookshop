import React from 'react';
import './book.scss'
import { connect } from "react-redux";
import { addCart } from '../../actions/actions';
//import cart from '../cart/cart';

const Book = (props) =>{  
  return (
     <div className='book'>
        <div className="bookImg">
          <img src={props.book.image} alt="" />
        </div>
         <h2>{props.book.title}</h2>
         <div className="bookOther">
           <p>{props.book.publisher}</p>
           <p>{props.book.author}</p>
         </div>
         <p className='price'>{props.book.price} TL</p>
         <button className="cartBtn" onClick={() => props.addCart(props.book)}>
           Sepete Ekle
         </button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return{
    cart:state.cart
  }
}

// const mapStateToAction = {addCart};

export default connect(mapStateToProps,{addCart})(Book);