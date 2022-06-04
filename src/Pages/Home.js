import React from 'react'
import { Cta } from '../component/Cta'
import Developers from '../component/Developers'
// import Developer from '../component/test'
import { Token } from '../component/Token'
import { Wallet } from '../component/Wallet'

export const Home = () => {
  return (
    <div className=' bg-darkBg h-full  overflow-hidden'>
<Cta />
<Wallet />
<Developers />
<Token />
</div>
    
  )
}


