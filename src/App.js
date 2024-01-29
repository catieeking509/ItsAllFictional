import Home from './Components/Home.jsx';
import NavBar from './Components/NavBar.jsx';
import Books from './Components/Books.jsx';
import Favorites from './Components/Favorites.jsx';
import ContactForm from './Components/Contact.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';




function App() {


  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <NavBar/>
        </header>
        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/Books" element={<Books />} />
            <Route path="/Favorites" element={<Favorites />} />
            <Route path="/Contact" element={<ContactForm />} />
          </Routes>
        </main>
        <footer className="footer">
        " will be login"
        </footer>
      </div>      
    </BrowserRouter>

  );
}

export default App;

