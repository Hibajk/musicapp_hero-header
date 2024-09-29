import React from 'react'
import CenterMenu from './CenterMenu'
import logo from '../images/logo.png';

function Header() {
    const bStyle = "border-[2px] rounded-[10px] border-slate-600 px-[25px] py-[7px] text-base"
  return (
    <div className="header bg-slate-800 flex items-center justify-between px-[5rem] pt-[2.4rem] text-[0.8rem]">
        <img src={logo} alt="" className='logo w-[150px] h-[90px]' />
        <CenterMenu/>
        <div className="buttons flex">
            <button className={`mr-9 bg-slate-600 hover:bg-slate-200 hover:text-black `+bStyle}>Login</button>
            <button className={`hover:bg-slate-200 hover:text-black ` +bStyle}>SignUp</button>
        </div>
    </div>
  )
}

export default Header