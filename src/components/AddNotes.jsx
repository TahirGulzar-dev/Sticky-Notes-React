import React, { useState } from 'react'

function AddNotes({ clicks, setinput }) {
  function handleOnClick() {
    clicks(true)
    setinput(true)
  }

  return (
    <div className='h-52 w-52 bg-purple-800 rounded-md flex justify-center items-center m-3'>
      <button className='text-9xl font-black text-orange-600' onClick={handleOnClick}>+</button>
    </div>
  )
}

export default AddNotes
