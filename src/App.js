import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Home from './components/view/Home'
import About from './components/view/About';
import Features from './components/view/Features'
import Cards from './components/Features/Cards';
import BackToTop from './common/BackToTop';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/features' element={<Features />} />
          <Route path='/params' element={<Cards />} />
        </Routes>
      </BrowserRouter>
      <BackToTop/>
    </>
  );
}

export default App;
