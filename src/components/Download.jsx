import React from 'react'
import googlepic from '../images/google.png'
import applepic from '../images/apple.png'

function Download() {
    const downloadimagestyling = 'border-[2px] border-[#232A4E] rounded-[13px] h-[3rem] w-[10rem]'
  return (
    <div className='download'>
        <div className='download_images flex'>
        <img src={googlepic} alt="" className={downloadimagestyling + ` mr-4`}/>
        <img src={applepic} alt=""  className={downloadimagestyling}/>
        </div>
    </div>
  )
}

export default Download