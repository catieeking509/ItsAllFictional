import React, { useEffect, useState } from 'react';
import { Card, CardHeader, CardBody, CardTitle, CardText } from 'reactstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';


export default function BookShelf() {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('./2024.data.json')
    .then((response) => {
      setBooks(response.data.books);
    });
  }, [books]);


  return (
  <div className="books-section">
    {books&&books.map((book) => (
      <Card
        key= {book.ibsn}
        className="my-2 card"
        inverse
        style={{
        width: 'auto'
        }}
      >
        <CardHeader className="card-header">
            {book.title}
        </CardHeader>
        <CardBody>
          <CardTitle tag="h5">
              {book.author}
          </CardTitle>
          <CardText>
            <>{book.description}</>
            <>{book.rating}</>
            <>{book.opinion}</> 
          </CardText>
        </CardBody> 
      </Card>
    ))};
  </div>

  );
}
