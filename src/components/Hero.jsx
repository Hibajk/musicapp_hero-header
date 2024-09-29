import React from 'react'
import Download from './Download'
import heropic from '../images/hero.png'

function Hero() {
  return (
    <div className='wrapper bg-slate-800 flex items-center justify-between px-20 rounded-b-[5rem] w-[100%] h-[35rem] relative '>
        {/*leftside*/}
        <div className='headings flex flex-col items-start justify-center h-[100%] text-[3rem]'>
            <span>Experience The </span>{" "}
            <span>
                <b> Best Quality Music </b>
            </span>
            <span className='text-[15px] text-[#afbcd1]'>
            Music streaming app that lets you discover, play, and enjoy your favorite tunes on-the-go.
            <br />
            Enjoy a vast library of songs, playlists, and radio stations.
            </span>
            {/*download app*/}
            <div>
                <span className='text-[13px] text-'>Download now on <b>IOS</b> and <b>Android</b></span>
                <Download/>
            </div>
        </div>
        {/*rightside*/}
        <div className='images'>
            <img src={heropic} alt="" className='absolute top-[-2rem] h-[35rem] left-[43rem]' />
        </div>
    </div>
  )
}

export default Hero