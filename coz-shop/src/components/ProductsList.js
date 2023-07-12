import Menu from "./menu"
import Product from "./Product"
const ProductsList = ({menuOn,menuHandle,ProductArr}) =>{
   return <div className="page_Container">
   <div>
    {menuOn? <Menu menuHandle={menuHandle}/> : ''}
   </div>
   <div className="Product_Page_Container">
   {ProductArr? ProductArr.map((el,index)=> <section className="Product_Container" key ={index}><Product obj={el}  /> </section>) : ''}
   </div>
   </div>
}

export default ProductsList
