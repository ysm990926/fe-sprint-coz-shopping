import React from 'react';
import { Link } from 'react-router-dom';
const Header = ({menuHandle}) => {
  const envURL = process.env.PUBLIC_URL
return <header className="headerContainer">
<div className='LogoCon'>
<Link to='/'>
    <span className='Logo'>
      <img src={envURL + '/logo.png'} />
    </span>
</Link>
<Link to='/'>
<span className="Logo-title">
    COZ Shopping
</span>
</Link>
</div>
<span className='menu' onClick={menuHandle}>
<img src={envURL + '/menu.png'}/>
</span>
</header>
}

export default Header