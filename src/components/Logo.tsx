import React from 'react'
import imgNavbar from '../assets/imgNavbar.jpg';

const Logo = () => {
  return (
    <div className="flex justify-center lg:justify-start p-5">
      <img className="w-12 rounded-full" src={imgNavbar} alt="LogoNavbar" />
      <h4 className="text-5xl dark:text-white  ">
        Port
        <span className="dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-br dark:from-slate-50 dark:to-slate-400 dark:text-cyan-500 text-blue-600">
          folio
        </span>
      </h4>
    </div>
  );
}

export default Logo
