import axios from "axios"
import Menu from "./menu"
import { useState,useEffect} from "react"
import Product from "./Product"
const Main = ({menuOn,menuHandle}) => {
        const [countArr,setCountArr] = useState([])     
        useEffect(()=>{
            axios
            .get("http://cozshopping.codestates-seb.link/api/v1/products?count=4")
            .then((res)=>{
              setCountArr(res.data)
              })
          },[])
    return <main className="page_Container">  
       {menuOn? <Menu menuHandle={menuHandle}/> : ''}
       <h1 className="Title">상품 리스트</h1>
       <div className="flex_Container">
       <div className="Product_Page_Container">
       {countArr? countArr.map((el,index)=> <section className="Product_Container"><Product obj={el} key ={index} /> </section>) : ''}
   </div>
   </div>
     <h1 className="Title2">북마크 리스트</h1>
     <div className="flex_Container">
       <div className="Product_Page_Container">
       {countArr? countArr.map((el,index)=> <section className="Product_Container"><Product obj={el} key ={index} /> </section>) : ''}
   </div>
   </div>
    </main> 
}

export default Main