import React from 'react'
import { Link } from "react-router-dom";

import list from "../images/list-icon.svg";

const features = [
    {
      name: 'DELEGATION',
      description:
        'DAOGOV token holders delegate their tokens voting power to a wallet, either their own or one controlled by a third party.',
      icon: list,
    },
    {
      name: 'PROPOSALS',
      description:
      'DAOGOV token holders can create proposals which are the passed to the community for approval.',
      icon: list,
    },
    {
      name: 'TraVOTINGnsfers are instant',
      description:
        'Wallets with delegated DAOGOV power vote on proposals, deciding whether to approve or reject, ensuring complete decentralized decision making.',
      icon: list,
    }
  ]
  

export const Protocol = () => {
  return (
    <>
   
    <div className="protocol py-32 px-14 bg-[#242130] relative xl:py-28 xl:px-24  md:py-16 md:px-9  ">
        <div className="bg-square hidden md:-left-1/2 md:top-5 md:flex  lg:-top-4 lg:-left-1/2 xl:-left-[51%] xl:-top-[5%] 2xl:-left-[-39%] "></div>
        <div className=" relative z-10 flex flex-col md:flex-row  mx-3 mt-6 ">
          <div
           className="flex h-96 w-96 ml-4 mb-3 lg:w-1/2 flex-col  items-start justify-center content-center "
          >
            <p className="span text-lg pb-3 text-primary">GOVERNANCE PROTOCOL</p>
            <p className="title-line text-5xl span pb-3">Governed by the community.</p>

            <p className="content text-xl w-3/4 pb-3 text-secondary">
              The USDAO Protocol is managed by a global community of our token
              holders and delegates.
            </p>
            <Link to="/" className="btn btnstyle hover:bg-gradient-to-t mt-2  from-[#f88311] to-[#f83811] bg-darkBg hover:text-white text-secondary text-xl py-2  px-4">
              Learn More
            </Link>
          </div>

          <div className="mt-10 mr-5 lg:w-1/2">
          {/* <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10"> */}
          <dl className="flex flex-col justify-center items-center">
            {features.map((feature) => (
              <div key={feature.name} className="relative mb-3">
                <dt>
                  <div className="absolute flex items-center justify-center h-14 w-20 rounded-md  text-black">
                  {/* <img src={list} alt="list" className="list-icon absolute  left-5 -top-3 " /> */}
                    <img src={feature.icon} className=" w-16 h-16 mb-2 mr-7" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-xl mb-2 leading-6 font-medium text-white">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16  mb-2 text-base w-80 text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
        </div>
      </div></>
  )
}
