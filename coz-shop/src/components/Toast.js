import { useState } from "react"

const Toast = ({messege,markOn}) =>{
    const envURL = process.env.PUBLIC_URL
    return <div className="toast_Container">
        {markOn ?  <div className='Toast'><img src={envURL + '/bookmark_ico-on.png'} className='Toast_on_img' />
        <div className='toast_on_text'> {messege}</div>
        </div>
         : <div className='Toast'><img src={envURL + '/bookmark_ico-off.png'} className='Toast_off_img' />
         <div className='toast_off_text'> {messege}</div>
         </div>
         }
    </div>
}

export default Toast