import React from 'react';
import Book from './Book.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';

import '../App.css';


export default function BookShelf( {Books} ) {


  let BooksJsx = Books.map ( book => 
    <Book key= {book.id} {...book} />
  );

  

  return (
    <section className="bookshelf">
      { BooksJsx }
    </section>
  );
}