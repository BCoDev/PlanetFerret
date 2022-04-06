import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './components/Home'
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import About from './components/About'
import Resources from './components/Resources';

function App() {
  return (
    <div className="App">
    <BrowserRouter>

        <Header />
        <Nav />
        <Routes>
          <Route path='/' element={< Home />} />
          <Route path='/about' element={< About />} />
          <Route path='/resources' element={< Resources />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
