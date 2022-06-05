import React from 'react'
import { Advantages } from '../component/Advantages'
import { Cta } from '../component/Cta'
import Developers from '../component/Developers'
import { Footer } from '../component/Footer'
import { Protocol } from '../component/Protocol'
import Social from '../component/Social'
// import Example from '../component/test'
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
<Protocol />
{/* <Example /> */}
<Advantages />
<Social      socialHighlight="Join global" socialTitle="open source community" />
<Footer />
</div>
    
  )
}


