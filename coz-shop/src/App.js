import './App.css';
import Header from './components/Header';
import React, { useState } from 'react';
import { Route,Routes } from 'react-router-dom';
import Main from './components/Main';
import Bookmark from './components/Bookmark';
import ProductsList from './components/ProductsList';
import Footer from './components/Footer';
function App() {
  const [menuOn , setMenuOn] = useState(false)
  const menuHandle = () =>{
    setMenuOn(!menuOn)
  }
  return (
    <div>
      <Header menuHandle={menuHandle}/>
      <Routes>
        <Route path='/' element={<Main menuOn={menuOn} menuHandle={menuHandle}/>} />
        <Route path='/products/list' element={<ProductsList menuOn={menuOn} menuHandle={menuHandle}/>} />
        <Route path='/bookmark' element={<Bookmark menuOn={menuOn} menuHandle={menuHandle}/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
