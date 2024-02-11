import React from 'react'
import DashboardWrapper from '../components/DashboardWrapper/DashboardWrapper'
import Revenue from '../components/Revenue/Revenue'
import Invoice from '../components/Invoice/Invoice'
import RightBar from '../components/RightBar/RightBar'
import "./Home.css"

const Home = () => {
  return (
     <DashboardWrapper>
        <div className="home__container">
            <div className="content">
               <Revenue/>
               <Invoice/>
            </div>
            <RightBar/>
        </div>
    </DashboardWrapper>
  )
}

export default Home
