import { useState } from "react"

const Product = ({obj,bookmarkHandle,bookmark}) =>{
    const [modalOn,setModalOn] = useState(false)
    const modalHandle = () =>{
       setModalOn(!modalOn)
    }
    return <article>
        {modalOn? <section className="modal_Container">
         <img src={obj.image_url ? obj.image_url : obj.brand_image_url? obj.brand_image_url: ""} alt={obj.title} className="modal_img"/>
         <span className="closeBtn" onClick={modalHandle}><img src={process.env.PUBLIC_URL + '/Vector.png'}></img></span> <span className='modal_font'>{obj.type === 'Category'? '# '+obj.title : obj.title ? obj.title : obj.brand_name ? obj.brand_name : ''}</span>
         {bookmark ? bookmark.includes(obj) ? <img src={process.env.PUBLIC_URL + '/bookmark_ico-on.png'} className="modal_on"onClick={(e)=>bookmarkHandle(null,obj)} />
         : <img src={process.env.PUBLIC_URL + '/bookmark_ico-off.png'} className="modal_off" onClick={(e)=>bookmarkHandle(e,obj)} /> : ''} 
         </section>:''}
        <img src={obj.image_url ? obj.image_url : obj.brand_image_url? obj.brand_image_url: ""} alt={obj.title} className="product_img" onClick={modalHandle}></img>
        {bookmark ? bookmark.includes(obj) ? <img src={process.env.PUBLIC_URL + '/bookmark_ico-on.png'} className="on-off"onClick={(e)=>bookmarkHandle(null,obj)} />
        : <img src={process.env.PUBLIC_URL + '/bookmark_ico-off.png'} className="on-off" onClick={(e)=>bookmarkHandle(e,obj)} /> : ''}
        {/* <img src={process.env.PUBLIC_URL + '/bookmark_ico-off.png'} className="on-off" onClick={(e)=>bookmarkHandle(e,obj)} />
        <img src={process.env.PUBLIC_URL + '/bookmark_ico-on.png'} className="on-off"onClick={(e)=>bookmarkHandle(null,obj)} /> */}
        <div className="detail_container">
            <span className="title_font">
                {obj.type === 'Category'? '# '+obj.title : obj.title ? obj.title : obj.brand_name ? obj.brand_name : ''}
            </span>
            <span className={obj.type === 'Brand' ?  'brand' : obj.type === 'Product' ? 'sale' : ''}>
                {obj.discountPercentage? obj.discountPercentage+'%' : obj.follower? '관심고객수' : ''}
            </span>
        </div>
        <div className={obj.type === 'Exhibition' ? 'left' : obj.type === 'Product' ? 'Right' : 'right'}>
            {obj.sub_title ? obj.sub_title : obj.follower ? obj.follower.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : obj.price ? obj.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+'원' : ''}
        </div>
    </article>
}

export default Product
