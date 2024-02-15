import React,{useState} from 'react'
import styles from "./Navbar.module.css"
import {AiOutlineClose, AiOutlineMenu, AiOutlineSearch} from "react-icons/ai"
import Logo from "../../images/last.jpeg"


function Navbar() {
    const [nav,setNav] = useState(false)

  return (
    <header className={styles.navbar}>
        <img src={Logo} alt="/" style={{ margin: 10}} />

        <nav>
            <ul className={nav ? [styles.menu,styles.active].join(" ") : [styles.menu] }>
                <li>
                    <a href='/'>
                    Services
                    </a>
                </li>
                <li>
                    <a href='/'>
                    Quotes
                    </a>
                </li>
                <li>
                    <a href='/'>
                    Reviews
                    </a>
                </li>
                <li>
                <a href='/' className={styles.callUsButton}>
                Call Us
                </a>
                </li>
                <li>
                    <AiOutlineSearch size={25} color={"white"}style={{marginTop:'6px'}} />
                </li>
            </ul>

        </nav>
        <div onClick={()=>setNav(!nav)} className={styles.mobile_btn}>
            {nav ?<AiOutlineClose size={25} /> :<AiOutlineMenu size={25} />}
          </div>
    </header>
  )
}

export default Navbar
