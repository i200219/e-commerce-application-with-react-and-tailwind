import React from 'react'
import mode from "../../assets/light.png"
import dark from "../../assets/dark.png"
const DarkMode = () => {
    const [theme, setTheme] = React.useState(
        localStorage.getItem('theme')? localStorage.getItem('theme') : 'light');
     const element = document.documentElement;
     React.useEffect(() => {
         if(theme === 'dark'){
             element.classList.add('dark');
             localStorage.setItem('theme', 'dark');
         }else{
             element.classList.remove('dark');
             localStorage.setItem('theme', 'light');
         }
     }, [theme]);
  return (
    <div className="relative">
      <img src={mode} alt="dark mode"
      className={"w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute right-0 z-10 ${theme === 'dark' ? 'opacity-0' : 'opacity-100' }`"}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      />
      <img src={dark} alt="dark mode"
      className="w-12 cursor-pointer drop-shadow-[
        1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 "
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      />
    </div>
  )
}

export default DarkMode
