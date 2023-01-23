import React, { useState } from 'react';
import {BsCart2} from 'react-icons/bs';
import {AiOutlineUser} from 'react-icons/ai';
import {BiSearch} from 'react-icons/bi';
import './navbar.scss';
import { bookSearch } from '../../actions/actions';
import { connect } from "react-redux";
import { Link } from 'react-router-dom'


 const  Navbar = (props) => {
  const [text,setText] = useState("");
  console.log(props);
  return (
    <div className='navbar'>
      <Link to="/"><h1>KİTAB DÜNYASI</h1></Link>
      <div className="inputBook">
        <form  >
      <BiSearch className='searchIcon' 
      onClick={
        () => {
        props.bookSearch(text);
        setText("");
        }
      }
      />
        <input type="text" placeholder='İstediğiniz kitabı arayın' value={text} onChange={e => setText(e.target.value)} />
        </form>     
        </div>
      <div className="right">
        <div className="user">
          <div className="userDiv">
          <AiOutlineUser className='userIcon' />
          </div>
        </div>
        <Link to="/cart" className='cart'>
          {
           props.cart.length !== 0 
           ?
           <div className="noti"> {props.cart.length}</div>
           :
           ""
          }
         
          <BsCart2 style={{fontSize:30}} />
        </Link>
    </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return{
    books:state.bookData,
    cart:state.cart
  }
}

 export default connect(mapStateToProps,{bookSearch})(Navbar);

 