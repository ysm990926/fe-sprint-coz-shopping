import './App.css';
import Header from './components/Header';
import React, { useEffect, useState } from 'react';
import { Route,Routes } from 'react-router-dom';
import Main from './components/Main';
import Bookmark from './components/Bookmark';
import ProductsList from './components/ProductsList';
import Footer from './components/Footer';
import axios from 'axios';
function App() {
  const [ProductArr , setProductArr] = useState([])
  const [menuOn , setMenuOn] = useState(false)
  const menuHandle = () =>{
    setMenuOn(!menuOn)
  }
  useEffect(()=>{
    axios
    .get("http://cozshopping.codestates-seb.link/api/v1/products")
    .then((res)=>{
      setProductArr(res.data)
      })
  },[])

  return (
    <div className='root'>
      <Header menuHandle={menuHandle}/>
      <Routes>
        <Route path='/' element={<Main menuOn={menuOn} menuHandle={menuHandle} ProductArr={ProductArr}/>} />
        <Route path='/products/list' element={<ProductsList menuOn={menuOn} menuHandle={menuHandle} ProductArr={ProductArr}/>} />
        <Route path='/bookmark' element={<Bookmark menuOn={menuOn} menuHandle={menuHandle}/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
