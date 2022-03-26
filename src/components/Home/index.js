import React, { useState } from 'react'
import Tetris from '../../img/tetris1.png'
import Smoke from '../../img/smoke.gif'
import Smoke1 from '../../img/smoke1.png'

export default function Index() {
  const [animate, setAnimate] = useState(false)
  return (
    <div className='h-screen flex' style={{ backgroundColor : "#040910", backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} >
        {/* <video className='videoTag' autoPlay loop muted style={{ position: 'absolute', width: '100%', left: 0, top: 0 }}>
            <source src={Smoke} type='video/mp4' />
        </video> */}
        <img src={Smoke} className="absolute top-0 left-0 w-full h-full opacity-30 z-1" />
        <img src={Smoke} className="absolute top-0 left-0 w-full h-full opacity-30 rotate-180 z-1" />
        {/* <img src={Smoke1} className="absolute top-0 left-0 w-full h-full opacity-20" /> */}
        <div className='w-full p-10 flex justify-center text-center z-10'>
            <img src={Tetris} className="absolute w-1/2 opacity-25 z-0"/>
            <div className={animate ? 'transition delay-300 absolute bottom-96' : 'absolute bottom-96 animate-fade'} >
              <h1 className="text-gray-300 text-9xl tracking-wide transition delay-300" style={{ fontFamily: 'Arcadia', fontSize: 200}} ><span className="text-red-500">RED</span>TETRIS</h1>
              <h2 className={animate ? 'hidden' :'text-gray-400 transition delay-300 text-4xl tracking-wide'} style={{ fontFamily: 'Arcadia'}} >Life is like Tetris if it doesn't fit, just flip it over</h2>
              <h2 className={animate ? 'animate-fade text-gray-400 transition delay-300 text-2xl tracking-wide mb-4' : 'hidden'} style={{ fontFamily: 'Arcadia'}} >Enter your username</h2>
              <input 
                class={animate ?
                  'w-1/3 mx-auto animate-fade appearance-none block bg-transparent text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-900 focus:border-gray-500'
                  : 
                  'hidden' } 
                  id="grid-password"
                  type="text"
                  placeholder="Username"
                  style={{ fontFamily: 'Arcadia'}}
                />
              <button
                className={animate ? 'hidden' : 'shadow-lg  h-16 w-3/12 text-black text-xl font-bold py-2 px-4 border-b-4 border-yellow-700 hover:border-yellow-600 rounded mt-4 hover:scale-105'}
                style={{ backgroundColor: '#ffc642'}}
                onClick={() => setAnimate(true)}
              >
              Start
              </button>
              <button
                className={animate ? 'h-16 w-3/12  text-black text-xl font-bold py-2 px-4 border-b-4 border-yellow-700 hover:border-yellow-600 rounded mt-4 hover:scale-105' : 'hidden'}
                style={{ backgroundColor: '#ffc642'}}
                onClick={() => setAnimate(true)}
              >
              Join
              </button>
            </div>
        </div>
    </div>
  )
}