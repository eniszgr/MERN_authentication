import React from 'react'

function Header() {
  return (
    <div className=' fixed top-0 w-full z-50 cursor-pointer h-1/15 bg-indigo-100 flex justify-between px-9'>
      <div className='flex justify-center items-center'>Auth Project</div>
      <div className='flex gap-8 items-center'>
        <div className='cursor-pointer'>img</div>
        <div className='cursor-pointer'>Login</div>

      </div>



    </div>
  )
}

export default Header