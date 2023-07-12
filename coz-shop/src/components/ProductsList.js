import Menu from "./menu"

const ProductsList = ({menuOn,menuHandle}) =>{
   return <div>
    {menuOn? <Menu menuHandle={menuHandle}/> : ''}
   </div>
}

export default ProductsList
