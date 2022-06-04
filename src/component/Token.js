import React from 'react'
import stablecoin from "../images/tokens/stable-coin.svg";
import assettoken from "../images/tokens/asset-token.svg";
import daotoken from "../images/tokens/dao-token.svg";


export const Token = () => {
  return (
    <div className="tokens  overflow-hidden text-center flex flex-col items-center">
    <p className="title-line text-xl lg:text-2xl xl:text-3xl font-semibold text-center">
      <span className='span  text-primary'>USDAO Protocol</span> Three tokens, one purpose
    </p>

    <p className="contentsstyle mb-6 ">
      The USDAO protocol uses three distinct digital assets to create a
      robust, transparent and secure alternative to centralized stablecoins,
    </p>

    <div className='flex flex-col my-4 lg:flex-row'>
      <div className='col m-2'  md={4}>
        <div className="token-wrap flex-col m-3 flex items-center content-center justify-center">
          <img src={stablecoin} className=' max-w-xs' alt="" />

          <p className="token-title">USDAO STABLECOIN</p>
          <p
           className="token-content"
           >
            The USDAO stablecoin provides super fast, low-cost transactions
            with 1:1 parity with the US dollar.{" "}
          </p>

          {/* <button className="btn btn-border-gradient">Learn More</button> */}
        </div>
      </div>

      <div className='col' md={4}>
        <div className="token-wrap ">
          <img src={assettoken} alt="" />

          <p className="token-title">ASSET TOKEN</p>
          <p className="token-content">
            Investors provide liquidity into the USDAO protocol in return
            for dividend bearing ASSET tokens.
          </p>

          {/* <button className="btn btn-border-gradient">Learn More</button> */}
        </div>
      </div>

      <div className='' md={4}>
        <div className="token-wrap d-flex flex-column align-items-center justify-content-center">
          <img src={daotoken} alt="" />

          <p className="token-title">DAOGOV TOKEN</p>
          <p className="token-content">
            DAOGOV is the governance token of the protocol, allowing holders
            to create and vote on proposals.
          </p>

          {/* <button className="btn btn-border-gradient">Learn More</button> */}
        </div>
      </div>
    </div>
  </div>
  )
}
