import React, { useState } from 'react';
import { Form, Button, FormGroup, Label, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


import '../App.css';

const RATING = {
  One: 'Not Great',
  Two: 'Okay',
  Three: 'Good',
  Four: 'Great',
  Five: 'Awesome',
}

function mdyToYmd(mdyString) {
  let [M, d, y] = mdyString.split('/');
  return `${y}-${M}-${d}`;
}

export default function BookForm({ submitItem, defaultDate = '', defaultRating = RATING.Two, defaultLink = '', defaultDescription = '', defaultTitle = '', defaultAuthor = '', cardId = 'create-form' }) {

  

const [date, setDate] = useState(mdyToYmd(defaultDate));
const [link, setLink] = useState(defaultLink);
const [description, setDescription] = useState(defaultDescription);
const [rating, setRating] = useState(defaultRating);
const [title, setTitle] = useState(defaultTitle);
const [author, setAuthor] = useState(defaultAuthor);

function handleDateChange(e) {
  setDate(e.target.value);
}

function handleLinkChange(e) {
  setLink(e.target.value);
}

function handleDescriptionChange(e) {
  setDescription(e.target.value);
}

function handleRatingChange(e) {
  setRating(e.target.value);
}

function handleTitleChange(e) {
  setTitle(e.target.value);
}

function handleAuthorChange(e) {
  setAuthor(e.target.value);
}

function handleSubmit(e) {
  e.preventDefault();

  const [y, M, d] = date.split('-');
  const formattedDate = `${M}/${d}/${y}`;
  submitItem(formattedDate, link, description, rating, title, author);

  setDate ('');
  setLink ('');
  setDescription ('');
  setRating (RATING.Two);
  setAuthor ('');
  setTitle ('');
}

  return (
    <div className="form-container">
      <Form data-bs-theme="light" className="book-form" onSubmit={handleSubmit}>
        <FormGroup className="form-add-row">
          <Label for={"link-date-" + cardId}>
            Date
          </Label>
          <Input  
            id={"link-date-" + cardId}
            name="date"
            type="date"
            value={date}
            onChange={handleDateChange}
            required
          />
        </FormGroup>
        <FormGroup className="form-add-row">
          <Label for={"link-title" + cardId}>
            Title
          </Label>
          <Input  
            id={"link-title" + cardId}
            name="title"
            type="title"
            value={title}
            onChange={handleTitleChange}
            required
          />
        </FormGroup>
        <FormGroup className="form-add-row">
          <Label for={"link-author" + cardId}>
            Author
          </Label>
          <Input  
            id={"link-author" + cardId}
            name="author"
            type="author"
            value={author}
            onChange={handleAuthorChange}
            required
          />
        </FormGroup>
        <FormGroup className="form-add-row">
          <Label for={"link-url" + cardId}>
            Link
          </Label>
          <Input  
            id={"link-url" + cardId}
            name="url"
            type="url"
            value={link}
            onChange={handleLinkChange}
            required
          />
        </FormGroup>
        <FormGroup className="form-add-row">
          <Label for={"link-description" + cardId}>
            Description
          </Label>
          <Input  
            id={"link-description" + cardId}
            name="description"
            type="text"
            value={description}
            onChange={handleDescriptionChange}
            required
          />
        </FormGroup>
        <FormGroup className="form-add-radio">
          <div>
            <Input
              name="radio-rating"
              type="radio"
              id={"rating-one" + cardId}
              value= "One"
              checked= {rating === RATING.One}
              onChange= {handleRatingChange}
            />
            &nbsp;
            <Label for={"rating-one" + cardId} className="radio-label me-3">
              INSERT IMG ONE STAR
            </Label>
          </div>
          <div>
            <Input
              name="radio-rating"
              type="radio"
              id={"rating-two" + cardId}
              value= "Two"
              checked= {rating === RATING.Two}
              onChange= {handleRatingChange}
            />
            &nbsp;
            <Label for={"rating-two" + cardId} className="radio-label me-3">
              INSERT IMG TWO STAR
            </Label>
          </div>
          <div>
            <Input
              name="radio-rating"
              type="radio"
              id={"rating-three" + cardId}
              value= "Three"
              checked= {rating === RATING.Three}
              onChange= {handleRatingChange}
            />
            &nbsp;
            <Label for={"rating-three" + cardId} className="radio-label me-3">
              INSERT IMG THREE STAR
            </Label>
          </div>
          <div>
            <Input
              name="radio-rating"
              type="radio"
              id={"rating-four" + cardId}
              value= "Four"
              checked= {rating === RATING.Four}
              onChange= {handleRatingChange}
            />
            &nbsp;
            <Label for={"rating-four" + cardId} className="radio-label me-3">
              INSERT IMG FOUR STAR
            </Label>
          </div>
          <div>
            <Input
              name="radio-rating"
              type="radio"
              id={"rating-five" + cardId}
              value= "Five"
              checked= {rating === RATING.Five}
              onChange= {handleRatingChange}
            />
            &nbsp;
            <Label for={"rating-five" + cardId} className="radio-label me-3">
              INSERT IMG FIVE STAR
            </Label>
          </div>
        </FormGroup>
        <FormGroup className="submit-button-container">
          <Button type="submit" className="action-button">submit</Button>
        </FormGroup>
      </Form>
    </div>
  );
}
