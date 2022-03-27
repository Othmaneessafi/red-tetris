import React, { useState } from 'react'
import Tetris from '../../img/tetris1.png'
import Smoke from '../../img/smoke.gif'
import Smoke1 from '../../img/smoke1.png'

export default function Index() {
  const [animate, setAnimate] = useState(false)
  return (
    <div className='h-screen w-full bg-black flex' style={{ backgroundColor : "#040910", backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} >
        {/* <video className='videoTag' autoPlay loop muted style={{ position: 'absolute', width: '100%', left: 0, top: 0 }}>
            <source src={Smoke} type='video/mp4' />
        </video> */}
        {/* <img src={Smoke} className="absolute top-0 left-0 w-full h-full opacity-30 z-1" />
        <img src={Smoke} className="absolute top-0 left-0 w-full h-full opacity-30 rotate-180 z-1" /> */}
        {/* <img src={Smoke1} className="absolute top-0 left-0 w-full h-full opacity-20" /> */}
        <div className='w-full p-10 flex justify-center text-center z-50'>
            <img src={Tetris} className="absolute w-1/2 opacity-25 z-0"/>
            <h1>Game page</h1>
        </div>
    </div>
  )
}