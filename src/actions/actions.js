export const SEARCH = "SEARCH";
export const ADDCART = "ADDCART";
export const INCREASE = "INCREASE";
export const DECREASE = "DECREASE";
export const DELETE = "DELETE";

export const bookSearch = (text) => {
   return {
      type: SEARCH,
      payload: text
   }
}

export const addCart = (book) => {
   return {
      type: ADDCART,
      payload: book
   }
}

export const toIncrease = (id) => {
   return {
      type: INCREASE,
      payload:id
   }
}

export const toDecrease = (id) => {
   return {
      type: DECREASE,
      payload:id
   }
}

export const toDelete = (id) => {
   return {
      type: DELETE,
      payload:id
   }
}