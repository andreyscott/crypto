import React from 'react'

import coins from "../images/shapes/all-coin-logos.svg";
export const Wallet = () => {
  return (
    <div className=" py-6 px-7">
    <div className='flex flex-col md:flex-row justify-center items-center'>
      <div  className=" w-1/2 mr-5 max-w-md">
        <img src={coins} alt="coins" className=" w-auto" />
      </div>

      <div
        
        className=" w-1/2 ml-2 flex flex-col  items-start align-items-md-center justify-content-center"
      >
        <p className="title-line text-xl xl:text-4xl font-medium text-left mb-2">
          WHAT ARE YOU WAITING <span className=' text-primary text-4xl font-medium'>FOR?</span>
        </p>

        <p className="w-60 font-normal mt-4 mb-6  text-secondary">
          There’s no need to create an account! Just connect your web 3.0
          wallet and get USDAO
        </p>

        <a
          href="https://test.usdao.io/"
          target="_blank"
          rel="noreferrer"
          className="btn btnstyle py-3 px-7 hover:cursor-pointer hover:bg-gradient-to-t  from-[#f88311] to-[#f83811]"
        >
          Connect wallet
        </a>

        <p className=" text-primary text-xl xl:text-2xl font-medium mt-5">Coming Soon!</p>
      </div>
    </div>
  </div>
  )
}
