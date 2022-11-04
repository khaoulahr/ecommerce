import React from 'react'
import { Cart,Footer, Hero, Navbar,Sales} from '../components';
import { herodata,  footerAPI,Sneakers, Boots, Sandales, Ballerines} from '../data/HeroData.js';

const Home = () => {

  return (
    <>
    <Navbar/>
    <Cart />
    <main className='flex flex-col gap-16 relative'>
      <Hero herodata={herodata} />
      <Sales endpoint={Sneakers} />
      <Sales endpoint={Boots} />
      <Sales endpoint={Sandales} />
      <Sales endpoint={Ballerines} />
    </main>
    <Footer footerAPI={footerAPI} />
    </>
  )
}

export default Home