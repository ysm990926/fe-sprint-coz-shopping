import Category from "./Category"
import Menu from "./menu"
import Product from "./Product"
import { useState,useEffect } from "react"
import Toast from "./Toast"
const Bookmark = ({menuOn,menuHandle,bookmark,bookmarkHandle,toastEvent,filterResult}) =>{
    const [focus , setFocus] = useState('All')
   const [curruntArr , setCurruntArr] = useState(bookmark)
   const addMessege = '북마크에 추가되었습니다.'
   const delMessege = '북마크가 제거되었습니다.'
   const focusHandle = (e) =>{
      setFocus(e)
   }

   useEffect(()=>{
      if(focus==='All'){
         setCurruntArr(bookmark)
      }else{
         setCurruntArr(
            bookmark.filter((el)=>{
            return el.type === focus
         }))
      }
   },[focus,bookmark])
   
    return <div className="page_Container">
        {toastEvent ? <Toast messege={filterResult? delMessege : addMessege} markOn={filterResult? false : true}/> : null}
        <Category focus={focus} focusHandle={focusHandle} />
    <div>
        {menuOn? <Menu menuHandle={menuHandle}/> : null}
    </div>
    <div className="Product_Page_Container">
   {curruntArr.length? curruntArr.map((el,index)=> <section className="Product_Container" key ={index}><Product obj={el} key ={el.id} bookmarkHandle={bookmarkHandle} bookmark={bookmark} /> </section>) : <section className="bookmark_help">새로운 상품을 북마크 해보세요</section>}
   </div>
    </div>
}

export default Bookmark