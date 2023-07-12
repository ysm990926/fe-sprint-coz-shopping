
const Product = ({obj}) =>{
    return <article>
        <img src={obj.image_url ? obj.image_url : obj.brand_image_url? obj.brand_image_url: ""} alt={obj.title} className="product_img"></img>
        <img src={process.env.PUBLIC_URL + '/bookmark_ico-off.png'} className="on-off"/>
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
