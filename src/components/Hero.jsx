import React from 'react'
import { PROFILE } from '../constants'
import profilePic from "../assets/robertButcher1.jpg"

const Hero = () => {
  return (
    <div className="relative flex min-h-screen items-end justify-center" id="hero">
      <img src={profilePic} alt={PROFILE.name} className="absolute inset-0 z-19 h-full w-full object-cover"></img>
      <div className='absolute inset-0 z-10 bggradient-to-b from-transparent from-60% to-black lg:from-30%'>
      </div>
      <div className='z-20 mx-4 max-w-3xl pb-20'>
        <h1 className='text-5xl font-semibold uppercase tracking-wide md:text-7xl text-slate-100'>
            {PROFILE.name}
        </h1>
        <p className='pt-2 font-semibold text-slate-100'>{PROFILE.info}</p>
      </div>
    </div>
  )
}
export default Hero
