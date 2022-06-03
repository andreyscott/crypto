import React from 'react'
import { Cta } from '../component/Cta'
import Developers from '../component/Developers'
import Developer from '../component/test'
import { Wallet } from '../component/Wallet'

export const Home = () => {
  return (
    <div className=' bg-darkBg h-full text-white '>
<Cta />
<Wallet />
<Developers />
<Developer />
</div>
    
  )
}

