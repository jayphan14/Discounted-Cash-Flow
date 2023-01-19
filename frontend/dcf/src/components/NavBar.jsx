import React from 'react'

const NavBar = () => {
  return (
    <div className='flex flex-row bg-black h-20 '>
        <div className='basis-7/12 text-white text-4xl text-left px-10 m-auto font-bold'>
            <h2>Discounted Cash Flow</h2>
        </div>

        <div className = "basis-5/12 text-right text-lg px-10 my-auto">
            <ul className=' text-gray-300 flex flex-row text-right cursor-pointer px-10'>
                <li className='flex-auto hover:text-xl duration-300'>View Your Stocks</li>
                <li className='flex-auto hover:text-xl duration-300'>Top Performance Stocks</li>
                <li className='flex-auto hover:text-xl duration-300'>About DCF</li>
            </ul>
        </div>
    </div>
  )
}

export default NavBar