import React, { useState } from 'react'
import Sidebar from './Sidebar/Sidebar'
import Navbar from './Navbar/Navbar'
import "./DashboardWrapper.css"


const DashboardWrapper = ({children}) => {
  const [openSidebar,setOpenSidebar] = useState(false)
  return (
    <div className='dashboard__wrapper'>
       <Sidebar 
        open={openSidebar}
        onOverlayClick={()=>setOpenSidebar(!openSidebar)}
        />
       <Navbar 
        onClickMenu={()=>{
          setOpenSidebar(!openSidebar)
        }}
        />
       <main>
          {children}
       </main>
    </div>
  )
}

export default DashboardWrapper
