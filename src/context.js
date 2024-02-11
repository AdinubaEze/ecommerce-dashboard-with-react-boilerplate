import { useContext ,createContext, useState, useEffect} from "react";


const ThemeContext = createContext(null);
function getInitialTheme() {
    const theme = localStorage.getItem('theme')
    return theme || "light";
  }
export const Theme = ({children}) =>{
    const [theme,setTheme] = useState(getInitialTheme())

    useEffect(() => {
        localStorage.setItem('theme', theme)
    }, [theme])

    return (<ThemeContext.Provider value={{theme,setTheme}}>
            {children}
         </ThemeContext.Provider>)
}

export const useThemeContext = () => useContext(ThemeContext);

