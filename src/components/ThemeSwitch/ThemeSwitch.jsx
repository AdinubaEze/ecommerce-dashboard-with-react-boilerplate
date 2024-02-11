import React,{useState,useEffect} from 'react'
import {BiSun,BiMoon} from 'react-icons/bi'
import {setDarkMode,setLightMode} from "../../helper"
import { useThemeContext } from '../../context'
import "./ThemeSwitch.css"


const ThemeSwitch = ({className,style}) => {
  const {theme,setTheme} = useThemeContext();
  const [isThemeToggleOn,seIsThemeToggleOn] = useState(theme == 'dark' ? true : false);
 
    useEffect(()=>{
      if(isThemeToggleOn){
        return setTheme("dark");
      }
      return setTheme("light");
    },[isThemeToggleOn])


    useEffect(()=>{
       if(theme == "dark"){
        return setDarkMode()
       }
       return setLightMode();
    },[theme])
    
  return (
    <div className={`theme__switch__container`} onClick={(e)=>e.stopPropagation()}>
        <input 
         type="checkbox" 
         id='theme-mode-toggle' 
         onChange={(e)=>{
            seIsThemeToggleOn(e.target.checked);
         }}
        />
        
        <label htmlFor="theme-mode-toggle" className={`theme__icon__container ${className}`} style={style}>
            <span className={`icon ${!isThemeToggleOn ? 'active' :''}`}>
              <BiSun/>
            </span>
            <span className={`icon ${isThemeToggleOn ? 'active' :''}`}>
              <BiMoon/>
            </span>
        </label>

    </div>
  )
}

export default ThemeSwitch
