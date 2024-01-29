import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import React from 'react';
import { Card, CardHeader, CardBody, CardTitle, CardText, Button } from 'reactstrap'


export default function Book( {date, link, description, rating, title, author} ) {
    return (
        <div className="books-section">
            <Card
                className="my-2 card"
                inverse
                style={{
                width: '18rem'
                }}
            >
                <CardHeader className="card-header">
                    {date}
                </CardHeader>
                <CardBody>
                    <CardTitle tag="h5">
                        {description}
                    </CardTitle>
                    <CardText>
                        Title: {title}
                        Author: {author}
                        Rating: {rating}
                    </CardText>
                    <a href= {link} target='_blank'>
                        <Button className="link-button">link</Button>
                    </a>
                </CardBody> 
            </Card>
        </div>
    );
}