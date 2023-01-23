import React from 'react'
import Book from './book';
import './bookList.scss'
import { connect } from "react-redux";

const BookList = (props) => {
  return (
    <div className='bookList'>
      {
        props.books.length !== 0 
        ?
        props.books.map(book => (
          <Book key={book.id} book={book}/>
        ))
        :
        <div className="error">Sonuç bulunamadı</div>
      }
    </div>
  )
}
const mapStateToProps = (state) => {
  return{
    books:state.bookData,
  }
}

export default connect(mapStateToProps)(BookList);
