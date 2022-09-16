import React, { useState } from 'react'
import logo from "../images/wtflog.png"
import { Link} from "react-scroll"

const Navbar = () => {

const [nav, setNav] = useState(false)

const changeBackground =() => {
    if(window.scrolly >= 50 ) {
        setNav(true)
    }
    else{
        setNav(false)
    }
}
window.addEventListener('scroll', changeBackground);

  return (
    <nav className={nav ? "nav active" : 'nav'}>
        <Link to='#' className='logo'>
            <img src={logo} alt=''/>
        </Link>
<input className='menu-btn' type='checkbox' id='menu-btn'/>
<label className='menu-icon' for='menu-btn'>
    <span className='nav-icon'></span>
</label>

<ul className='menu'>

<li><Link to="#">Fitness</Link></li>
<li><Link to="#">Nutritions</Link></li>
<li><Link to="#">Gyms</Link></li>
<li><Link to="#">Become WTF Partner</Link></li>
<li><Link to="#">About Us</Link></li>
<li><Link to="#">Login</Link></li>
</ul>

    </nav>
  )
}

export default Navbar