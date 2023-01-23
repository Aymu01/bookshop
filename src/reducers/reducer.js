import books from "../data";
import { SEARCH, ADDCART, INCREASE, DECREASE,DELETE } from "../actions/actions";

const INITIAL_STATE = {
  bookData: books,
  cart: []
}

export const reducer = (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case SEARCH:
      return { ...state, bookData: state.bookData.filter(item => item.title.toUpperCase().includes(action.payload.toUpperCase())) }
    case ADDCART:
      return { ...state, cart: [...state.cart, action.payload] }
    case INCREASE:
      return {
        ...state,
        cart: state.cart.map(
          elem => elem.id === action.payload
            ?
            { ...elem, num: elem.num + 1, totalPrice: elem.price * (elem.num + 1) }
            :
            elem
        )
      }
    case DECREASE:
      return {
        ...state,
        cart: state.cart.map(
          elem => elem.id === action.payload && elem.num > 1
            ?
            { ...elem, num: elem.num - 1, totalPrice: elem.price * (elem.num - 1) }
            :
            elem
        )
      }
    case DELETE:
      return{
        ...state,
        cart:state.cart.filter(elem => elem.id !== action.payload)
      }  
    
    default: return state;
  }

}

