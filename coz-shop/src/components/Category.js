

const Category = ({focus,focusHandle}) =>{
    return <div>
        <div className="category_Container">
         <div className="columnContainer">
           <img src={process.env.PUBLIC_URL + '/All_img.png'} className="category_img" onClick={(e)=>focusHandle('All')} />
           <h4 className={focus==='All'? "focus" : "category_title"} onClick={(e)=>focusHandle('All')}>전체</h4>
         </div>
         <div className="columnContainer">
         <img src={process.env.PUBLIC_URL + '/Product_img.png'} className="category_img" onClick={(e)=>focusHandle('Product')} />
           <h4 className={focus==='Product'? "focus" : "category_title"} onClick={(e)=>focusHandle('Product')} >상품</h4>
         </div>
         <div className="columnContainer">
         <img src={process.env.PUBLIC_URL + '/Category_img.png'} className="category_img" onClick={(e)=>focusHandle('Category')} />
           <h4 className={focus==='Category'? "focus" : "category_title"} onClick={(e)=>focusHandle('Category')} >카테고리</h4>
         </div>
         <div className="columnContainer">
         <img src={process.env.PUBLIC_URL + '/Exhibition_img.png'} className="category_img" onClick={(e)=>focusHandle('Exhibition')} />
           <h4 className={focus==='Exhibition'? "focus" : "category_title"} onClick={(e)=>focusHandle('Exhibition')} >기획전</h4>
         </div>
         <div className="columnContainer">
         <img src={process.env.PUBLIC_URL + '/Brand_img.png'} className="category_img" onClick={(e)=>focusHandle('Brand')} />
           <h4 className={focus==='Brand'? "focus" : "category_title"} onClick={(e)=>focusHandle('Brand')} >브랜드</h4>
         </div> 
      </div>
    </div>
}

export default Category