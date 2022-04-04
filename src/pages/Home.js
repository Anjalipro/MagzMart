import React from 'react'
import './../styles/home.css';
import { GiGraduateCap,GiOpenBook  } from 'react-icons/gi';
import { IoDiamond  } from 'react-icons/io5';

const Home = () => {
  return (
    <div className='home'>
      <div className='icons'>
      <GiGraduateCap size={170} />
      <span>150+ Publishers</span>
     
      
      </div>
      
      <div className='icons'>
      <IoDiamond size={170} />
      <span>204 Brands</span>
      </div>
      <div className='icons'>
      <GiOpenBook size={170} />
      <span>500+ Magazines Issued</span>
      </div>
    
    </div>
  )
}

export default Home