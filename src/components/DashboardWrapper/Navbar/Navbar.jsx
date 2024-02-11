import React from 'react'
import "./Navbar.css"
import { BsChatSquareText } from "react-icons/bs";
import { IoNotificationsOutline ,IoSearch} from "react-icons/io5";
import { Profile } from '../../../assets';
import { TiThMenu } from "react-icons/ti";
import { Logo } from '../../../assets';

const Navbar = ({onClickMenu}) => {
  return (
    <nav className='navigation__bar'>
       <div className="column">
         <img src={Logo} alt="Logo" className='logo'/>
         <div className="user__container">
             <div className="profile__container">
              <img src={Profile} alt="" />
             </div>
             <div className="detail">
                <h3>Emmanuel Eze</h3>
                <p className="text__muted">Administrator</p>
             </div>
         </div>
       </div>

       <div className="column right">
          <div className="icon__container">
             <BsChatSquareText/>
             <p className="notification__count">0</p>
          </div>

          <div className="icon__container">
             <IoNotificationsOutline/>
             <p className="notification__count">2</p>
          </div>

          <div className="search__container">
            <IoSearch className='icon'/>
            <input type="text" placeholder='Search'/>
          </div>

          <div className="menu" onClick={onClickMenu}>
             <TiThMenu/>
          </div>
       </div>
    </nav>
  )
}

export default Navbar
