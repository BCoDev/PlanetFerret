import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './components/Home'
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
    <BrowserRouter>

        <Header />
        <Nav />
        <Routes>
          <Route path='/home' element={< Home/>} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
