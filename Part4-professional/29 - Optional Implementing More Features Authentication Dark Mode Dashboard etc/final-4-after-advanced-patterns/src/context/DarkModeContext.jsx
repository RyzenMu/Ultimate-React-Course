import { createContext } from "react";
import {useLocalStorageState} from '../hooks/useLocalStorageState'
import { useContext } from "react";
import { useEffect } from "react";

const DarkModeContext = createContext()

function DarkModeProvider({children}){
const [isDarkMode, setIsDarkMode] = useLocalStorageState(false, "isDarkMode")
useEffect(function(){
    if(isDarkMode){
        document.documentElement.classList.add('dark-mode')
        document.documentElement.classList.remove('light-mode')
    }else {
        document.documentElement.classList.add('light-mode')
        document.documentElement.classList.remove('dark-mode')
    }
}, [isDarkMode])
function toggleDarkMode(){
    setIsDarkMode(isDark=> !isDark)
}
return <DarkModeContext.Provider value={{isDarkMode, toggleDarkMode}}>
    {children}
</DarkModeContext.Provider>

}

useDarkMode(){
    const context = useContext(DarkModeContext)
    if(context===undefined) throw new Error('Darkmode context was used outside of DarkMode provider') 
    return context;    
}

export {DarkModeProvider, useDarkMode}