import { useState } from "react"

const Product = ({obj,bookmarkHandle,bookmark}) =>{
    const envURL = process.env.PUBLIC_URL
    const [modalOn,setModalOn] = useState(false)
    const modalHandle = () =>{
       setModalOn(!modalOn)
    }
    const imgFilter = (obj) =>{
     if(obj.image_url) return obj.image_url
     if(obj.brand_image_url) return obj.brand_image_url
    }
    const bookmarkFilter = (obj,bookmark,className) =>{
        if(obj && bookmark){
            if(bookmark.includes(obj)) {
                return <img src={envURL + '/bookmark_ico-on.png'} className={className} onClick={(e)=>bookmarkHandle(null,obj)} />
            }else{
                return <img src={envURL + '/bookmark_ico-off.png'} className={className} onClick={(e)=>bookmarkHandle(e,obj)} />
            }
        }
    }
    const tilterFont = (obj) =>{
        if(obj.type === 'Category') return '# '+obj.title
        if(obj.title) return obj.title
        if(obj.brand_name) return obj.brand_name
    }
    const subTitle = (obj) =>{
        if(obj.sub_title) return obj.sub_title
        if(obj.follower) return obj.follower.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        if(obj.price) return obj.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+'원'
    }
    const classFilter = (obj) =>{
        if(obj.type === 'Brand') return 'brand'
        if(obj.type === 'Product') return 'sale'
    }
    const detailFilter = (obj) =>{
        if(obj.discountPercentage) return obj.discountPercentage+'%'
        if(obj.follower) return '관심고객수'
    }
    const detailClass= (obj)=>{
        if(obj.type === 'Exhibition') return 'left'
        if(obj.type === 'Product') return 'Right'
        return 'right'
    }
    return <article>
        {modalOn? <section className="modal_Container">
         <img src={imgFilter(obj)} alt={obj.title} className="modal_img" />
         <span className="closeBtn" onClick={modalHandle}>
            <img src={envURL + '/Vector.png'} alt="CloseButton" />
            </span>
            <span className='modal_font'>
                {tilterFont(obj)}
            </span>
         {bookmark.includes(obj) ? bookmarkFilter(obj,bookmark,'modal_on') : bookmarkFilter(obj,bookmark,'modal_off')}
         </section> : null}
        <img src={imgFilter(obj)} alt={obj.title} className="product_img" onClick={modalHandle} />
        {bookmarkFilter(obj,bookmark,'on-off')}
        <div className="detail_container">
            <span className="title_font">
                {tilterFont(obj)}
            </span>
            <span className={classFilter(obj)}>
                {detailFilter(obj)}
            </span>
        </div>
        <div className={detailClass(obj)}>
            {subTitle(obj)}
        </div>
    </article>
}

export default Product
