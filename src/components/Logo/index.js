import React, {useEffect, useState} from 'react'
import { useLocation } from "react-router-dom";

export default function Index() {
    const { pathname } = useLocation();

  return (
    <div className= {pathname == "/game" ? 'absolute w-full h-screen' : 'absolute w-full flex justify-center items-center h-screen' }>
        <h1 className={pathname == "/game" ? 'animate-move text-white tracking-wide z-50' : 'text-gray-300 text-9xl tracking-wide z-50' } style={{ fontFamily: 'Arcadia', fontSize: 200}} ><span className="text-red-500">RED</span>TETRIS</h1>
    </div>
  )
}
