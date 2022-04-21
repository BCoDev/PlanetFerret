import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './components/Home'
// import Header from './components/Header';         <Header />

import NavBar from './components/Nav';
import Footer from './components/Footer';
import About from './components/About'
import Resources from './components/Resources'; 
import SocketChat from './components/SocketChat'
import Container from 'react-bootstrap/esm/Container';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Container>
        <NavBar />
          <Routes>
            <Route exact path='/' element={< Home />} />
            <Route path='/about' element={< About />} />
            <Route path='/resources' element={< Resources />} />
            <Route path='/chat' element={< SocketChat />} />
          </Routes>
        <Footer />
      </Container>
    </BrowserRouter>
    </div>
  );
}

export default App;
