import Logo from '../../assets/logo.png'
import { FiUser } from "react-icons/fi";
import { IoMenu } from "react-icons/io5";
import { FiPlus } from "react-icons/fi";
import { MdOutlineCancel } from "react-icons/md";
import './navbar.css'
import { useState } from 'react';




function Navbar() {

const [isOn, setIsOn] = useState(false)

const handleMenu = () => {
  setIsOn((prev)=>!prev)
}

  return (
    <header>
      <nav>
        <div className="container nav__lists">
            <a href="#hero" className="logo">
              <img src={Logo} alt="" />
            </a>
            

            <ul className={ `nav__menu ${isOn ? 'show_nav' : ''}` }>
                <li><a href="#hero">Home</a></li>
                <li><a href="#listing">Rentals</a></li>
                <li><a href="#categories">Categories</a></li>
                <li><a href="#performance">About Us</a></li>
                <li><a href="#footer">Contact</a></li>
                <li><a href="#article">Blog</a></li>
</ul>


            <div className="right__nav">
                <div className="sigin__cont">
                    <span id="sigin__icon"><FiUser/></span>
                    <h6>Sign in</h6>
                </div>
            </div>

            <div className="last__nav">
            <div className="menu__option">
                  <span onClick={handleMenu}style={{opacity: 1}}
                  id="menu"><IoMenu /></span>
                  {/* <span onClick={handleExit}
                  id="exit"><MdOutlineCancel /></span> */}
            </div>
                
                <div className="post__listening">
                    <span id="FiPlus"><FiPlus/></span>
                    <h6>Post Listening</h6>
                </div>
            </div>

            
        </div>
    </nav>
    </header>
  )
}

export default Navbar