import React from 'react'
import Tetris from '../../img/tetris3.png'
import Smoke from '../../img/smoke.gif'
import Smoke1 from '../../img/smoke1.png'

export default function index() {
  return (
    <div className='h-screen flex' style={{ backgroundColor : "#040910", backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} >
        {/* <video className='videoTag' autoPlay loop muted style={{ position: 'absolute', width: '100%', left: 0, top: 0 }}>
            <source src={Smoke} type='video/mp4' />
        </video> */}
        <img src={Smoke} className="absolute top-0 left-0 w-full h-full opacity-30" />
        {/* <img src={Smoke1} className="absolute top-0 left-0 w-full h-full opacity-20" /> */}
        <div className=' w-1/2'></div>
        <div className='w-1/2 '>
            <img src={Tetris}  />
        </div>
    </div>
  )
}
