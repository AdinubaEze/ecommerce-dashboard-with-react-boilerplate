import React from 'react'
import "./Sidebar.css"
import { sidebarRoutes } from '../../../data'
import { Logo } from '../../../assets'
import ThemeSwitch from "../../ThemeSwitch/ThemeSwitch"

const Sidebar = ({open,onOverlayClick}) => {
  return (
    <>
      <div className={`sidebar__overlay ${open ? 'active':''}`} onClick={onOverlayClick}></div>
      <aside className={`sidebar ${open ? 'active':''}`}>
         <div className="sidebar__top">
            <div className="logo__container">
                <img src={Logo} alt="" className='logo'/>
                <h1 className='text'>Adinuba</h1>
            </div>
         </div>
         <div className="sidebar__middle">
            {
              sidebarRoutes.map((list,index)=>(
                  <div className={`route ${list.activeRoutes.includes("/") ? "active":""}`} key={index}>
                    {list.icon}
                    <h4>{list?.title}</h4>
                  </div>
              ))
            }
         </div>
         <div className="sidebar__bottom">
           <ThemeSwitch/>
         </div>
      </aside>
    </>
  )
}

export default Sidebar
