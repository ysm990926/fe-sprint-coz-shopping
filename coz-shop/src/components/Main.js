import axios from "axios"
import Menu from "./menu"
import { useState,useEffect} from "react"
import Product from "./Product"
import Toast from "./Toast"
const Main = ({menuOn,menuHandle,bookmark,bookmarkHandle,toastEvent,filterResult}) => {
        const [countArr,setCountArr] = useState([])
        const addMessege = '북마크에 추가되었습니다.'
        const delMessege = '북마크가 제거되었습니다.'
        const URL = "http://cozshopping.codestates-seb.link/api/v1/products"
        useEffect(()=>{
            axios
            .get(`${URL}?count=4`)
            .then((res)=>{
              setCountArr(res.data)
              })
          },[])
    return <main className="page_Container">  
    {toastEvent ? <Toast messege={filterResult? delMessege : addMessege} markOn={filterResult? false : true}/> : null}
       {menuOn? <Menu menuHandle={menuHandle}/> : null}
       <h1 className="Title">상품 리스트</h1>
       <div className="flex_Container">
       <div className="Product_Page_Container">
       {countArr? countArr.map((el,index)=> <section className="Product_Container"><Product obj={el} key ={index} bookmarkHandle={bookmarkHandle} bookmark={bookmark}/> </section>) : null}
   </div>
   </div>
     <h1 className="Title2">북마크 리스트</h1>
     <div className="flex_Container">
       <div className="Product_Page_Container">
       {bookmark? bookmark.map((el,index)=> {return index < 4 ? <section className="Product_Container"><Product obj={el} key ={index} bookmarkHandle={bookmarkHandle} bookmark={bookmark}/> </section> : null} ) : null}
   </div>
   </div>
    </main> 
}

export default Main