import React from 'react'


const features = [
    {
      name: 'Full Collateralization',
      description:
        'The ecosystem is managed by smart contracts which ensure full collateralization at all times. Liquidity providers hold ASSET tokens which earn dividends generated by transaction fees.',
      button: "Learn More",
    },
    {
        name: '100% Decentralized',
        description:
          'The USDAO protocol is fully decentralized, with complete governance by DAOGOV token holders ensuring the protocol always remains in the control of the community.',
        button: "Learn More",
      },
      {
        name: 'Cross Chain Development',
        description:
          'Whilst the USDAO ecosystem is built on Ethereum, it will be further developed to operate across multiple blockchains and Layer 2 protocols.',
        button: "Learn More",
      },
    {
      name: 'Earn Monthly Rewards',
      description:
      'Low fees and super-fast transactions with no hidden costs makes USDAO ideal for cross-border remittance, and as a dollar-pegged stablecoin for cryptocurrency traders.',
      button: "Learn More",
    },
    {
        name: 'Business Integration',
        description:
          'USDAO protocol has been designed to make it easy for developers to create innovative new products and services as well as integrate into their existing business systems.',
        button: "Learn More",
      },
    {
      name: 'Staking and Earning',
      description:
        'The USDAO ecosystem provides investors with efficient earning potential by staking their tokens, and a fully automated system to maximise returns.', 
        button: "Learn More",
    }
  ]
  

export const Advantages = () => {
  return (
    <div className="advantage  py-16 px-3 lg:py-28 lg:px-24 xl:py-36 xl:px-32">
    <p className=" text-center text-4xl font-medium text-white  my-5">
      <span className=' span  text-primary'>Advantages</span> of the USDAO Protocol
    </p>

    <div className=" mt-16">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
               
                  <p className="ml-16 text-xl leading-6 font-medium token-title text-white  text-left">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base w-  text-secondary">{feature.description}</dd>
                <a
          href="https://andrey-profile.web.app"
          target="_blank"
          rel="noreferrer"
          className="btn btnstyle py-3 px-7 ml-16 mt-4 hover:cursor-pointer hover:bg-gradient-to-t  from-[#f88311] to-[#f83811]"
        >
            {feature.button}
        </a>
              </div>
            ))}
          </dl>
        </div>
    </div>

  )
}
