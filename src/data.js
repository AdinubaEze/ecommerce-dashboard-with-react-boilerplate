import { MdSpaceDashboard } from "react-icons/md";
import { SiGoogleanalytics } from "react-icons/si";
import { CiShoppingBasket,CiMoneyBill,CiDeliveryTruck } from "react-icons/ci";
import { PiMessengerLogoBold,PiChartLineBold } from "react-icons/pi";
import { IoMdSettings } from "react-icons/io";

export const sidebarRoutes = [
    {
        title:"Dashboard",
        icon:<MdSpaceDashboard/>,
        route:"/",
        activeRoutes:['/']
    },
    {
        title:"Analytics",
        icon:<SiGoogleanalytics/>,
        route:"/analytics",
        activeRoutes:['/analytics']
    },
    {
        title:"Products",
        icon:<CiShoppingBasket/>,
        route:"/products",
        activeRoutes:['/products']
    },
    {
        title:"Payments",
        icon:<CiMoneyBill/>,
        route:"/payments",
        activeRoutes:['/payments']
    },
    {
        title:"Orders",
        icon:<CiDeliveryTruck/>,
        route:"/orders",
        activeRoutes:['/orders']
    },
    {
        title:"Enquiry",
        icon:<PiMessengerLogoBold />,
        route:"/enquiry",
        activeRoutes:['/enquiry']
    },
    {
        title:"Marketing",
        icon:<PiChartLineBold/>,
        route:"/marketing",
        activeRoutes:['/marketing']
    },
    {
        title:"Settings",
        icon:<IoMdSettings />,
        route:"/settings",
        activeRoutes:['/settings']
    },

]


export const averageRevenue = {
    options:{
        chart: {
          id: 'profits',
          type: 'area',
          height: 160,
          sparkline: {
            enabled: true
          },
        },
        dataLabels: {
            enabled: false
        },
        tooltip: {
          theme: 'dark'
        },
        stroke: {
          curve: 'smooth',
          width:2,
        },
        fill: {
          opacity: 1,
        },
        labels: [...Array(24).keys()].map(n => `2024-01-0${n+1}`),
        xaxis: {
          type: 'datetime',
        },
        yaxis: {
          min: 0
        },
        colors: ['#33c648'],
       
    },
    series: [{
        name: 'Profits',
        data: [ 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35,45,47,60,65]
      }],
  }




export const customerReturn = {
    options:{
        chart: {
          id: 'customerReturn',
          type: 'area',
          height: 160,
          sparkline: {
            enabled: true
          },
        },
        dataLabels: {
            enabled: false
        },
        tooltip: {
          theme: 'dark'
        },
        stroke: {
          curve: 'smooth',
          width:2,
        },
        fill: {
          opacity: 1,
        },
       
        labels: [...Array(24).keys()].map(n => `2024-01-0${n+1}`),
        xaxis: {
          type: 'datetime',
        },
        yaxis: {
          min: 0
        },
        colors: ['#FF0000'],
       
    },
    series: [{
        name: 'Returns',
        data: [62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46,20]
      }],
  }




export const salesByCategory = {
          
  series: [{
    name: 'Men',
    data: [80, 50, 30, 40, 100, 20],
  }, {
    name: 'Women',
    data: [20, 30, 40, 80, 20, 80],
  }, {
    name: 'Children',
    data: [44, 76, 78, 13, 43, 10],
  }],
  options: {
    chart: {
      height: 350,
      type: 'radar',
      toolbar:{
        show:false,
      },
      dropShadow: {
        enabled: true,
        blur: 1,
        left: 1,
        top: 1
      },
      sparkline: {
        enabled: false
      },
    },
    grid:{
      show:false,
    },
    tooltip: {
      theme: 'dark'
    },
    stroke: {
      curve:"smooth",
      width: 2
    },
    fill: {
      opacity: 1
    },
    markers: {
      size: 0
    },
    yaxis:{
      labels:{
        show:false,
      }
    },
     xaxis: {
      labels:{
        show:false,
      },
      axisBorder:{
        show:false,
      },
    } 
  },


};

  export const revenueVsOrder = {
          
    series: [{
      name: 'Revenue',
      data: [31, 40, 28, 51, 42, 109, 100]
    }, {
      name: 'Orders',
      data: [11, 32, 45, 32, 34, 52, 41]
    }],
    options: {
      chart: {
        type: 'area',
        toolbar: {
          show: false
        },
      },
      dataLabels: {
        enabled: false
      },
      grid:{
         show: false,
      },
      stroke: {
        curve: 'smooth',
        width:2,
      },
      xaxis: {
        show: false,
        labels: {
          show: true
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      },
      tooltip: {
        theme: 'dark',
        x: {
          format: 'dd/MM/yy HH:mm'
        },
      },
    },
  
  
  };



  export const sales = [
    {
      id:"01",
      name:"Emmanuel Eze",
      customerId:"BH4556",
      city:"Lagos",
      date:"01 Feb",
      status:1,
      amount:"$45",
    },
    {
      id:"02",
      name:"Jerry Michael",
      customerId:"88894R",
      city:"Lagos",
      date:"02 Feb",
      status:1,
      amount:"$123",
    },
    {
      id:"03",
      name:"Mary Arum",
      customerId:"YI0998",
      city:"Lagos",
      date:"05 Feb",
      status:1,
      amount:"$245",
    },
    {
      id:"04",
      name:"Blessing Emeka",
      customerId:"90PT89",
      city:"Abuja",
      date:"07 Feb",
      status:0,
      amount:"$20",
    },
    {
      id:"05",
      name:"Johnson Emmy",
      customerId:"UI0998",
      city:"Porthacourt",
      date:"10 Feb",
      status:1,
      amount:"$29",
    },
    {
      id:"06",
      name:"Grace Abuchi",
      customerId:"AB7893",
      city:"Lagos",
      date:"12 Feb",
      status:1,
      amount:"$345",
    },
  ]


  export const bestSellingProducts = [
    {
      name:"Women's Sexy Midi Dress",
      image:"https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/88/0153362/1.jpg?7660",
      category:"Women",
      percentage:"20%",
    },
    {
      name:"Women's Sleeveless ",
      image:"https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/21/6495362/1.jpg?2194",
      category:"Women",
      percentage:"25%",
    },
    {
      name:"Trendy Offwhite Up And Down Wears",
      image:"https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/87/7328922/1.jpg?3520",
      category:"Men",
      percentage:"15%",
    },
    {
      name:"Storm Kid's Perfumed Deodorant Body Spray- 3pcs",
      image:"https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/68/1069231/1.jpg?5490",
      category:"Children",
      percentage:"28%",
    },
    {
      name:"Hanna'S Secret HAPPY GIRL PERFUME SPRAY FOR CHILDREN",
      image:"https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/76/2146402/1.jpg?0693",
      category:"Children",
      percentage:"35%",
    },
    {
      name:"Givanas Perfume Fragrance 100% Carbbean PERFUME",
      image:"https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/98/482054/1.jpg?7228",
      category:"Women",
      percentage:"25%",
    },
    {
      name:"Stylish Multicolor Unisex Up And Down Wears Pk3",
      image:"https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/53/2276342/1.jpg?9748",
      category:"Men",
      percentage:"30%",
    },
  ]