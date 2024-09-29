import React from 'react'

function CenterMenu() {
    const liStyle = "mr-[4rem] hover:cursor-pointer text-base hover:text-slate-400"
  return (
    <div className="menu flex">
        <ul className='flex w-[100%] justify-between'>
            <li className={liStyle}>Home</li>
            <li className={liStyle}>About</li>
            <li className={liStyle}>Performer</li>
            <li className={liStyle}>Event Shedule</li>
        </ul>
    </div>
  )
}

export default CenterMenu