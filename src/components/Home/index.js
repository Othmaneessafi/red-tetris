import React from 'react'
import Tetris from '../../img/tetris3.png'
import Smoke from '../../img/smoke.mov'

export default function index() {
  return (
    <div className='h-screen flex' style={{ backgroundColor : "#040910"}} >
        {/* <video className='videoTag' autoPlay loop muted style={{ position: 'absolute', width: '100%', left: 0, top: 0 }}>
            <source src={Smoke} type='video/mp4' />
        </video> */}
        <div className=' w-1/2'></div>
        <div className='w-1/2 p-10'>
            <img src={Tetris} />
        </div>
    </div>
  )
}
