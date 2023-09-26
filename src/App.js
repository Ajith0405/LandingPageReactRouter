
import './App.css';

import Footer from './components/Footer';
import Header from './components/Header';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';


function App() {
  return (
    <div>
     <Header/>
     <BrowserRouter>
      <Routes>
        
        <Route index element={<Home/>} />
        <Route path='/Home' element={<Home/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/Register' element={<Register/>} />
          
        
      </Routes>
    </BrowserRouter>
    <Footer/>
    </div>
  );
}

export default App;
