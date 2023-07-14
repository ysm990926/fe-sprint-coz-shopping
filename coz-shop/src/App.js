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
  const [bookmark,setBookMark] = useState([])
  const [toastEvent, setToastEvent] = useState(false)
  const [filterResult,setFilterResult] = useState(false)
  const URL = "http://cozshopping.codestates-seb.link/api/v1/products"
  const menuHandle = () =>{
    setMenuOn(!menuOn)
  }
  useEffect(()=>{
    axios
    .get(URL)
    .then((res)=>{
      setProductArr(res.data)
      })

  },[])
  const bookmarkHandle = (e,target) => {
    if(e){
      setBookMark([...bookmark,target])
      setFilterResult(false)
      if(toastEvent===false){
        setToastEvent(true)
        setTimeout(() => {
          setToastEvent(false)
        }, 3000);
      }
    }else{
      setFilterResult(true)
      setBookMark(bookmark.filter((el)=>{
        return el.id !== target.id
      }))
      if(toastEvent===false){
        setToastEvent(true)
        setTimeout(() => {
          setToastEvent(false)
        }, 3000); 
      }
    }
  }

  return (
    <div className='root'>
      <Header menuHandle={menuHandle}/>
      <Routes>
        <Route path='/' element={<Main menuOn={menuOn} menuHandle={menuHandle} ProductArr={ProductArr} bookmarkHandle={bookmarkHandle} bookmark={bookmark} toastEvent={toastEvent} filterResult={filterResult}/>} />
        <Route path='/products/list' element={<ProductsList menuOn={menuOn} menuHandle={menuHandle} ProductArr={ProductArr} bookmark={bookmark} bookmarkHandle={bookmarkHandle} toastEvent={toastEvent} filterResult={filterResult}/>} />
        <Route path='/bookmark' element={<Bookmark menuOn={menuOn} menuHandle={menuHandle} bookmark={bookmark} bookmarkHandle={bookmarkHandle} ProductArr={ProductArr} toastEvent={toastEvent} filterResult={filterResult}/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
