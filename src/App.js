import { useState, useEffect } from 'react';
import { nanoid } from "nanoid";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Components/Home.jsx';
import NavBar from './Components/NavBar.jsx';
import BookShelf from './Components/BookShelf.jsx';
import Favorites from './Components/Favorites.jsx';
import ContactForm from './Components/Contact.jsx';
import LoginPage from './Components/LoginPage.jsx';
import BookForm from './Components/Book_Admin.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';





function App() {

  let [Books, setBooks] = useState([]);



  function initializePageState() {
    let savedState = localStorage.getItem("items");
    if (typeof savedState === 'string') {
      let parsedState = JSON.parse(savedState);
      setBooks(parsedState);
    };
  }

  useEffect(initializePageState, []);

  function addItem(date, link, description, rating, title, author) {
    setBooks(function (oldItems) {
      let newItems = [
        ...oldItems, 
        {
          date,
          description,
          link,
          rating,
          title,
          author,
          id: nanoid(),
        },
      ];
      localStorage.setItem('items', JSON.stringify(newItems));
      return newItems;
    });
  }


  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <header className="App-header">
          <NavBar/>
        </header>
        <main>
          <Routes>
            <Route exact="true" path="/" element={<Home />} />
            <Route path="/BookShelf" element={<BookShelf Books={Books} />} />
            <Route path="/Favorites" element={<Favorites />} />
            <Route path="/Contact" element={<ContactForm />} />
            <Route path="/LoginPage" element={<LoginPage />} />
            <Route path="/Book_Admin" element={<BookForm submitItem={addItem} />} />
          </Routes>
        </main>
        <footer className="footer">
          FOOTER
        </footer>
      </div>      
    </BrowserRouter>

  );
}

export default App;

