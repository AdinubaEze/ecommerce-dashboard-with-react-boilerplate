import React from 'react'
import { IoFilterSharp } from "react-icons/io5";
import { sales } from '../../data';
import "./Invoice.css"

const Invoice = () => {
  return (
    <div className='invoice__container'>
       <div className="invoice__container__top">
           <h3>Sales Invoice</h3>
           <button className='btn'>Filter<IoFilterSharp/></button>
       </div>
       <div className="invoice__container__middle">
          <table>
              <thead>
                <tr>
                 <th className='text__muted'>No</th>
                 <th className='text__muted'>Customer Name</th>
                 <th className='text__muted mobile__hide'>Customer ID</th>
                 <th className='text__muted mobile__hide'>City</th>
                 <th className='text__muted mobile__hide'>Order Date</th>
                 <th className='text__muted'>Status</th>
                 <th className='text__muted'>Amount</th>
                </tr>
              </thead>
              <tbody>
                {
                    sales?.map((list,index)=>(
                      <tr key={index}>
                          <td>{list.id}</td>
                          <td>{list.name}</td>
                          <td className='mobile__hide'>{list.customerId}</td>
                          <td className='mobile__hide'>{list.city}</td>
                          <td className='mobile__hide'>{list.date}</td>
                          <td>{list.status == 1 ? (<div className='status'><span className='dot paid'></span>Paid</div>) :(<div  className='status'><span className='dot pending'></span>Pending</div>)}</td>
                          <td>{list.amount}</td>
                      </tr>
                    ))
                }
              </tbody>
          </table>
       </div>
    </div>
  )
}

export default Invoice
