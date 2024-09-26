import React from 'react'
import Buttons from './Buttons'

function Navbar() {
  return (
    <nav className='h-16 bg-purple-800  flex justify-between items-center px-8'>
      <div>
        <h1 className='cursor-pointer text-orange-600 font-black text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-wide drop-shadow-xl sm:text-center text-center '>𝓢𝓽𝓲𝓬𝓴𝔂 𝓝𝓸𝓽𝓮𝓼</h1>
      </div>
      <div className='hidden sm:flex md:flex lg:flex'>
        <Buttons>Login</Buttons>
        <Buttons>Signup</Buttons>
      </div>
    </nav>
  )
}

export default Navbar
