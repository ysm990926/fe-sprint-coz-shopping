import { useEffect, useState } from "react"
import Menu from "./menu"
import Product from "./Product"
import Category from "./Category"
import Toast from "./Toast"
const ProductsList = ({menuOn,menuHandle,ProductArr,bookmark,bookmarkHandle,toastEvent,filterResult}) =>{
   const [focus , setFocus] = useState('All')
   const [curruntArr , setCurruntArr] = useState(ProductArr)
   const addMessege = '북마크에 추가되었습니다.'
   const delMessege = '북마크가 제거되었습니다.'
   const focusHandle = (e) =>{
      setFocus(e)
   }

   useEffect(()=>{
      if(focus==='All'){
         setCurruntArr(ProductArr)
      }else{
         setCurruntArr(
            ProductArr.filter((el)=>{
            return el.type === focus
         }))
      }
   },[focus])
   return <div className="page_Container">
      {toastEvent ? <Toast messege={filterResult? delMessege : addMessege} markOn={filterResult? false : true}/> : null}
      <Category focus={focus} focusHandle={focusHandle} />
   <div>
    {menuOn? <Menu menuHandle={menuHandle}/> : null}
   </div>
   <div className="Product_Page_Container">
   {curruntArr? curruntArr.map((el,index)=> <section className="Product_Container" key ={index}><Product obj={el} key ={el.id} bookmarkHandle={bookmarkHandle} bookmark={bookmark} /> </section>) : null}
   </div>
   </div>
}

export default ProductsList
