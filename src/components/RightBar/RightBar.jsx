import React from 'react'
import "./RightBar.css"
import {salesByCategory,bestSellingProducts} from "../../data"
import ReactApexChart from 'react-apexcharts'
import { TiChartAreaOutline } from "react-icons/ti";

const RightBar = () => {
  return (
    <div  className='right__bar__container'>
      <div className="sales__by__category__card">
              <div className="top">
                 <h3>Sales By Category</h3>
              </div>
              <div className="middle">
                  <ReactApexChart
                   options={salesByCategory.options}
                   series={salesByCategory.series}
                   width="100%"
                 />
              </div>
      </div>

      <div className="best__selling__container">
         <div className="top">
           <h3>Best Selling</h3>
         </div>
         <div className="middle">
            {
                bestSellingProducts.map((list,index)=>(
                  <div className="product__card" key={index}>
                      <div className="product__image">
                         <img src={list.image} alt={list.name} />
                      </div>
                      <div className="detail">
                          <p className="name">{list.name}</p>
                          <div className="row">
                            <p className="text__muted category">{list.category}</p>
                            <div className="percentage">
                                <TiChartAreaOutline/>
                                {list.percentage}
                            </div>
                          </div>
                      </div>
                  </div>
                ))
            }
         </div>
      </div>
    </div>
  )
}

export default RightBar
