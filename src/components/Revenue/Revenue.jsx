import React from 'react'
import { TiChartAreaOutline } from "react-icons/ti";
import { averageRevenue, customerReturn,revenueVsOrder} from '../../data';
import ReactApexChart from 'react-apexcharts';
import { PiChartLineDownBold } from "react-icons/pi";
import "./Revenue.css"



const Revenue = () => {
  return (
    <div className='revenue__container'>
       <div className="revenue__summery__container">
          {/* Start revenue summary card */}
          <div className="revenue__summary__card">
             <div className="column left">
                 <h3 className='title'>Average Revenue</h3>
                  <h1 className="amount">$25,565</h1>
                 <div className="detail">
                    <span className="success__rate">
                        <TiChartAreaOutline/>
                        20%
                    </span>
                    <p className="text__muted">$20,452</p>
                 </div>
             </div>
             <div className="column right">
                 <ReactApexChart
                  options={averageRevenue.options}
                  series={averageRevenue.series}
                />
             </div>
          </div>
          {/* End revenue summary card */}



          {/* Start revenue summary card */}
          <div className="revenue__summary__card">
             <div className="column left">
                 <h3 className='title'>Customer Return</h3>
                  <h1 className="amount">3,456</h1>
                 <div className="detail">
                    <span className="danger__rate">
                        <PiChartLineDownBold/>
                        10%
                    </span>
                    <p className="text__muted">2,452</p>
                 </div>
             </div>
             <div className="column right">
                 <ReactApexChart
                  options={customerReturn.options}
                  series={customerReturn.series}
                />
             </div>
          </div>
          {/* End revenue summary card */}
       </div>


      {/* Revenue chart begins here */}
       <div className="revenue__chart__container">
         <h3 className='title'>Revenue And Orders</h3>
         <div className="chart__container">
          <ReactApexChart
            options={revenueVsOrder.options}
            series={revenueVsOrder.series}
            width="100%"
            height="100%"
          />
         </div>
       </div>
      {/* Revenue chart ends here */}
    </div>
  )
}

export default Revenue
